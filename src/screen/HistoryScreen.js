import React, { Component } from "react";
import { Text, View } from "react-native";

import { connect } from "react-redux";

class HistoryScreen extends Component {
  constructor(props) {
    super(props);
    //console.log(this.props.history);
  }
  render() {
      console.log(this.props.history);
    return (
      <View style={{ flex: 1 }}>
        <View style={{ justifyContent: "center", alignItems: "center", marginTop: 20 }}>
          <Text style={{ fontSize: 30}}>Điểm thưởng: {this.props.point}💫</Text>
          <Text style={{ fontSize: 30, marginTop: 20}}>Lịch sử chạy cùng Topfy</Text>
        </View>
        <View>
            {
                this.props.history.length === 0 ? <Text style={{marginLeft: 15}}>Hãy mua sắm và chạy nhiều hơn để nhận nhiều điểm thưởng hơn nhé!</Text> :
                <View style={{marginLeft: 15}}>
                {
                this.props.history.map((h, i) => {
                    return(
                        <Text key={i} style={{fontSize: 20}}>{h.store_name}: {h.point}💫</Text>
                    )
                })
                }
                </View>
            }
        </View>
      </View>
    );
  }
}

mapStateToProps = state => {
  return ({ point, history } = state);
};

export default connect(mapStateToProps)(HistoryScreen);
