import pandas as pd
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity
from scipy import sparse
import heapq
from sklearn.model_selection import train_test_split
import csv
import sys

with open('userdict.csv', mode='r') as infile:
    reader = csv.reader(infile)
    udict = dict((int(rows[1]), int(rows[2])) for rows in reader if rows[1] != 'id')

with open('servicedict.csv', mode='r') as infile:
    reader = csv.reader(infile)
    sdict = dict((int(rows[1]), int(rows[2])) for rows in reader if rows[1] != 'id')

merchants = pd.read_csv('new_merchants.csv')
Y_data = pd.read_csv('Ydata.csv').values[:,1:]
Ybar_data = pd.read_csv('Ybar_data.csv').values[:,1:]

S = pd.read_csv('similarity.csv').values[:,1:]
k = 2
n_users = len(np.unique(Y_data[:, 0]))
n_items = len(np.unique(Y_data[:, 1]))
mu = pd.read_csv("mu.csv").values[:,1:]
Ybar = sparse.coo_matrix((Ybar_data[:,2], (Ybar_data[:,1],Ybar_data[:,0])),(n_items,n_users))
Ybar = Ybar.tocsr()

def convertU(uid):
  return udict[uid]

def convertS(sid):
  if sid not in sdict.keys():
    sdict[sid] = len(sdict)
  return sdict[sid]





def pred(u, i, normalized=1):
        """
        predict the rating of user u for item i (normalized)
        if you need the un
        """
        # Step 1: find all items rated by user u
        ids = np.where(Y_data[:, 0] == u)[0].astype(np.int32)
        # Step 2:
        items_rated_by_u = (Y_data[ids, 1]).astype(np.int32)
        # Step 3: find similarity btw the current item and others item
        # who already rated by u
        if i not in Y_data[:, 1]:
            return 0
        sim = S[i, items_rated_by_u]  # find similarity between services rated by user and this service
        # Step 4: find the k most similarity items
        a = np.argsort(sim)[-k:]  # find the k most similar services
        # and the corresponding similarity levels
        nearest_s = sim[a]
        # How did each of 'near' items rated by user u
        r = Ybar[items_rated_by_u[a], u]  # how was each of near services rated by user
        if normalized:
            # add a small number, for instance, 1e-8, to avoid dividing by 0
            return (nearest_s * r)[0] / (np.abs(nearest_s).sum() + 1e-8)

        return (nearest_s * r)[0] / (np.abs(nearest_s).sum() + 1e-8) + mu[i]



def recommend(u, normalized=1, maxItem=2):  # recommend item to users
    """
    Determine all items should be recommended for user u.
    The decision is made based on all i such that:
    cf.pred(u, i) > 0. Suppose we are considering items which
    have not been rated by u yet.
    """
    ids = np.where(Y_data[:, 0] == u)[0]
    items_rated_by_u = Y_data[ids, 1].tolist()  # or users who rated this service
    dic = dict()
    for i in range(n_items):
        if i not in items_rated_by_u:  # if item is not rated
            rating = pred(u, i)  # predict the rate for item
            if rating > 0:
                dic[i] = rating  # if rating item is ok take it
        else:
            dic[i] = Ybar[i, u]  # if already rated get it
    returnList = list(dict(heapq.nlargest(maxItem, dic.items(), key=lambda i: i[1])).keys())  # return list of items
    return returnList

def revert2u(listU):
  returnList = []
  for u in listU:
    returnList.append(list(udict.keys())[list(udict.values()).index(u)])
  return returnList

listSvcId = merchants.service_id.unique()
svc2tag = dict()
for id in listSvcId:
  svc2tag[id] = merchants[merchants.service_id == id].tag.values[0]
#svc2tag

def revert2s(listS):
  returnList = []
  for s in listS:
    svcId = list(sdict.keys())[list(sdict.values()).index(s)]
    svcTag = svc2tag[svcId]
    returnList.append(svcTag)
  return returnList

def main(userId):
    uid = udict[userId]
    print(revert2s(recommend(uid)))
#
if __name__ == "__main__":
    userId = sys.argv[1]
    main(int(userId))
