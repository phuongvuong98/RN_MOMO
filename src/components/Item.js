    import React from 'react'
    import {TouchableOpacity, Image, View, Text} from 'react-native'
  
  export default Item = props => {
      console.log(props);
    const {link, store_name, store_address} = props.item
    pic = ""
    if(link == "https://localhost:3000/logo"){
      pic = require("../../assets/item/res.png")
    } else{
      pic = {uri: link}
    }
    return (
      <TouchableOpacity
        style={{
          width: "100%",
          backgroundColor: "white",
          flex: 1,
          flexDirection: "row",
          padding: 10,
          marginTop: 10,
          borderRadius: 5,
        }}
        onPress={() => props.navigation.navigate("Info", {item: props.item, pic: pic})}
      >
        <Image
          style={{ height: 90, width: 90 }}
          source={pic}
        />
        <View style={{ width: "100%", padding: 5 }}>
          <Text style={{ fontSize: 13 }}>{store_name}</Text>
          {/* <Text>{merchant_name}</Text> */}
          <Text style={{ marginTop: 10 }}>0.1 km</Text>
        </View>
      </TouchableOpacity>
    );
  };