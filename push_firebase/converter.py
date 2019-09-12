import csv, json

with open('transactions') as csv_file:
    print('start')
    csv_reader = csv.reader(csv_file, delimiter=',')
    output = []
    line_count = 0
    for row in csv_reader:
        if line_count == 0:
            #print(f'Column names are {", ".join(row)}')
            line_count += 1
        else:
            output.append(row[1])
            line_count += 1
            #print(row)

    print(line_count)

    #print('write to file!')
    #with open('data.json', 'w') as outfile:
        #json.dump(output, outfile)

    
    

    