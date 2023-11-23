import {
  View,
  Text,
  Image,
  Button,
  Pressable,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native";
import { useState,useEffect } from "react";
import arrowIcon from "..//..//assets/icons/arrowLeft.png";
// import MapView from "react-native-web-maps";

export default function Delivery({ navigation }) {

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          zIndex: 2,
          top: 20,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingLeft: 30,
          paddingRight: 30,
          position: "absolute",
          width: "100%",
          height: 45
        }}
      >
        <Pressable
          style={{
            height: 44,
            width: 44,
            borderRadius: "14%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
          }}
          onPress={() => navigation.navigate("order", {})}
        >
          <Image source={arrowIcon} style={{ width: 24, height: 24 }} />
        </Pressable>
      </View>
      <View style={{ height: "70%" }}>
        {/* <MapView initialRegion={{latitude: 10.8247535, longitude: 106.6800557, latitudeDelta: 0.0922, longitudeDelta: 0.0421}} /> */}
      </View>
    </View>
  );
}
