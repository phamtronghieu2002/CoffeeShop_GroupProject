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
import Header from "../../components/Header/Header";
import ratting from "..//..//assets/icons/Rating.png";
import bean from "..//..//assets/icons/bean.png";
import milk from "..//..//assets/icons/milk.png";
import { DataSizes } from "../../utils";
import { useState } from "react";
function Detail({ navigation, route }) {
  const [actived, setActived] = useState("S");
  const [coffeeItem,setCoffeeItem]=useState(route.params)
  const [Multprice,setMultprice]=useState(1);
  console.log(Multprice);
  return (
    <ScrollView
      style={{
        paddingLeft: 29,
        paddingRight: 29,
        paddingTop: 20,
        backgroundColor: "#FFFFFF",
      }}
    >
      <Header navigation={navigation} detail title="Detail" />
      <Image
        source={{
          uri: coffeeItem.img,
        }}
        style={{
          width: "100%",
          height: 226,
          marginTop: 20,
          borderBottomRightRadius: 10,
          borderBottomLeftRadius: 10,
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        }}
      />
      <View
        style={{
          gap: 5,
          marginTop: 20,
          paddingBottom: 30,
          borderBottomWidth: 1,
          borderBottomColor: "#EAEAEA",
        }}
      >
        <Text style={{ color: "#2F2D2C", fontSize: 20 }}>
          {route.params.name}{" "}
        </Text>
        <Text style={{ color: "#9B9B9B", fontSize: 12 }}>
          with {route.params.option}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
            <Image source={ratting} style={{ width: 20, height: 20 }} />
            <Text
              style={{ color: "#2F2D2C", fontSize: 16, fontWeight: "bold" }}
            >
              {route.params.rate}
            </Text>
            <Text style={{ color: "#808080", fontSize: 12 }}>(230)</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 5 }}>
            <View
              style={{
                width: 44,
                height: 44,
                backgroundColor: "#FFF0F0",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={bean} style={{ width: 38, height: 38 }} />
            </View>
            <View
              style={{
                width: 44,
                height: 44,
                backgroundColor: "#FFF0F0",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={milk} style={{ width: 24, height: 24 }} />
            </View>
          </View>
        </View>
      </View>

      <View style={{ paddingTop: 20, paddingRight: 20, gap: 15 }}>
        <Text style={{ fontSize: 16, color: "#2F2D2C" }}>Description</Text>

        <Text style={{ color: "#9B9B9B", fontSize: 14 }}>
          A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of
          espresso coffee and 85ml of fresh milk the fo..
          <Text style={{ color: "#C67C4E", fontSize: 14 }}>Read More</Text>
        </Text>
      </View>

      <View style={{ paddingTop: 20, paddingRight: 20, gap: 15 }}>
        <Text style={{ fontSize: 16, color: "#2F2D2C" }}>Size</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          {DataSizes.map((size) => (
            <Pressable
              onPress={() => {
                setActived(size);
                setMultprice(size==="S"?1:size==="M"?1.5:2);
              }}
              style={{
                backgroundColor: actived === size ? "#FFF5EE" : "#FFFFFF",
                width: "32%",
                height: 43,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                borderWidth: 1,
                borderColor: "#DEDEDE",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: actived === size ? "#C67C4E" : "#2F2D2C",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {size}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          alignItems: "center",
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        <View style={{ flex: 1 }}>
          <Text
            style={{
              color: "#9B9B9B",
              fontSize: 14,
            }}
          >
              price
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: "#C67C4E",
            }}
          >
            $ { (coffeeItem.price*Multprice).toFixed(2)}
          </Text>
        </View>
        <Pressable
          style={{
            width: 217,
            height: 55,
            backgroundColor: "#C67C4E",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("order", {...route.params,price:(coffeeItem.price*Multprice).toFixed(2)})}
        >
          <Text
            style={{
              fontSize: 16,
              color: "#FFFFFF",
            }}
          >
            Buy Now
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

export default Detail;
