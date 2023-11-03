import {
  View,
  Text,
  Image,
  Button,
  Pressable,
  TextInput,
  FlatList,
  ScrollView,
  StyleSheet,
} from "react-native";
import Header from "../../components/Header/Header";
import edit from "..//..//assets//icons/edit.png";
import document from "..//..//assets//icons/document.png";
import minius from "..//..//assets//icons/minus.png";
import add from "..//..//assets//icons/add.png";
import discount from "..//..//assets//icons/discount.png";
import arrowLeft from "..//..//assets//icons/arrowLeft.png";
import money from "..//..//assets//icons/money.png";
import dot from "..//..//assets//icons/dot.png";
import { useState } from "react";

const style = StyleSheet.create({
  wpSection: {
    borderBottomWidth: 1,
    borderColor: "#EAEAEA",
  },
  title: {
    color: "#2F2D2C",
    fontSize: 16,
    fontWeight: "bold",
  },
  label: {
    fontSize: 14,
    color: "#2F2D2C",
    fontWeight: 400,
  },
  price: {
    fontSize: 14,
    color: "#2F2D2C",
    fontWeight: "bold",
  },
});

function Order() {
  const [quantity, setQuantity] = useState(1);

  return (
    <ScrollView
      style={{
        paddingLeft: 29,
        paddingRight: 29,
        paddingTop: 20,
        backgroundColor: "rgb(255 255 255 / 82%)",
      }}
    >
      <Header title="Order" order />
      <View
        style={{
          minHeight: 46,
          flexDirection: "row",
          paddingTop: 3,
          paddingBottom: 3,
          paddingLeft: 3,
          marginTop: 20,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
          backgroundColor: "rgb(255 255 255)",
        }}
      >
        <View
          style={{
            width: "50%",
            height: "100%",
            backgroundColor: "#C67C4E",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: "#FFFFFF",
            }}
          >
            Deliver
          </Text>
        </View>

        <View
          style={{
            width: "50%",
            height: "100%",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 16,
            }}
          >
            Pick up
          </Text>
        </View>
      </View>

      <View
        style={{
          height: 135,
          gap: 10,
          ...style.wpSection,
          marginTop: 20,
        }}
      >
        <Text style={{ ...style.title, fontWeight: "bold" }}>
          Delivery Address
        </Text>
        <Text style={{ ...style.title, fontSize: 14, fontWeight: "bold" }}>
          Jl. Kpg Sutoyo
        </Text>
        <Text style={{ ...style.title, fontSize: 12, color: "#808080" }}>
          Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.
        </Text>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Pressable
            style={{
              flexDirection: "row",
              gap: 3,
              width: 120,
              height: 27,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              borderWidth: 1,
              borderColor: "#DEDEDE",
            }}
          >
            <Image source={edit} style={{ width: 10, height: 10 }} />
            <Text
              style={{
                color: "#303336",
                fontSize: 12,
              }}
            >
              Edit Address
            </Text>
          </Pressable>

          <Pressable
            style={{
              flexDirection: "row",
              gap: 3,
              width: 120,
              height: 27,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              borderWidth: 1,
              borderColor: "#DEDEDE",
            }}
          >
            <Image source={document} style={{ width: 10, height: 10 }} />
            <Text
              style={{
                color: "#303336",
                fontSize: 12,
              }}
            >
              Add note
            </Text>
          </Pressable>
        </View>
      </View>

      <View style={{ paddingTop: 25, paddingBottom: 25, ...style.wpSection }}>
        <View
          style={{
            height: 54,
            flexDirection: "row",
            gap: 20,
            alignItems: "center",
          }}
        >
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG",
            }}
            style={{
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              width: 54,
              height: 54,
            }}
          />
          <View style={{ flex: 1 }}>
            <Text
              style={{ color: "#2F2D2C", fontSize: 16, fontWeight: "bold" }}
            >
              Cappucino
            </Text>
            <Text style={{ color: "#9B9B9B", fontSize: 12 }}>chocolate</Text>
          </View>

          <View
            style={{
              gap: 10,
              flexDirection: "row",

              alignItems: "center",
            }}
          >
            <Pressable
              style={{
                width: 30,
                height: 30,
                borderRadius: "50%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderWidth: 1,
                borderColor: "#AAADB0",
                flexDirection: "row",
              }}
              onPress={() => {
                setQuantity((v) => (v == 1 ? 1 : v - 1));
              }}
            >
              <Image source={minius} style={{ width: 18, height: 18 }} />
            </Pressable>
            <Text style={{ fontSize: 15, fontWeight: 600 }}>{quantity}</Text>
            <Pressable
              style={{
                width: 30,
                height: 30,
                borderRadius: "50%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderWidth: 1,
                borderColor: "#AAADB0",
                flexDirection: "row",
              }}
              onPress={() => {
                setQuantity(quantity + 1);
              }}
            >
              <Image source={add} style={{ width: 18, height: 18 }} />
            </Pressable>
          </View>
        </View>
      </View>

      <View
        style={{
          paddingTop: 25,
          paddingBottom: 25,
        }}
      >
        <View
          style={{
            height: 56,
            flexDirection: "row",
            gap: 15,
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#EAEAEA",
            backgroundColor: "#FFFFFF",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            paddingLeft: 16,
            paddingRight: 16,
          }}
        >
          <Image source={discount} style={{ width: 20, height: 20 }} />
          <Text
            style={{
              fontSize: 14,
              color: "#2F2D2C",
              flex: 1,
              fontWeight: "bold",
            }}
          >
            1 Discount is applied
          </Text>
          <Image source={arrowLeft} style={{ width: 20, height: 20 }} />
        </View>
      </View>

      <View
        style={{ height: 100, gap: 10, paddingBottom: 10, ...style.wpSection }}
      >
        <Text style={{ ...style.title }}>Payment Summary</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ ...style.label }}>Price</Text>
          <Text style={{ ...style.price }}>`$ ${4.53}`</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ ...style.label }}>Delivery Price</Text>
          <Text style={{ ...style.price }}> $5.53</Text>
        </View>
      </View>
      <View
        style={{
          paddingTop: 10,
          paddingBottom: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          ...style.wpSection,
        }}
      >
        <Text style={{ ...style.label }}>Total Payment</Text>
        <Text style={{ ...style.price }}> $5.53</Text>
      </View>

      <View
        style={{
          paddingTop: 10,
          paddingBottom: 10,
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Image source={money} style={{ width: 24, height: 24 }} />
        <Text style={{ ...style.price, flex: 1 }}> $5.53</Text>
        <Image source={dot} style={{ width: 24, height: 24 }} />
      </View>

      <Pressable
        style={{
          height: 55,
          backgroundColor: "#C67C4E",
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => navigation.navigate("Screen", {})}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: 600,
            color: "#FFFFFF",
          }}
        >
          Order
        </Text>{" "}
      </Pressable>
    </ScrollView>
  );
}

export default Order;
