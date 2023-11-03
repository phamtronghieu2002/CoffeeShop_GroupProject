import {
  View,
  Text,
  Image,
  Button,
  Pressable,
  TextInput,
  FlatList,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import DefaultAvatar from "../../components/DefaultImage/DefaultAvatar";
import SearchIcon from "..//..//assets//icons//search.png";
import SettingIcon from "..//..//assets//icons//setting.png";
import style from "./StylesHome";
import Banner from "./Banner/Banner";
import CoffeeItem from "../../components/CoffeeItem/CoffeeItem";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { DataCoffees } from "../../utils";
import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
export default function Home({ navigator, route }) {
  const [actived, setActived] = useState(() => {
    return DataCoffees.map((items) => items.cateName)[0];
  });

  const [coffees, setCoffees] = useState(DataCoffees[0].options);
  const scrollRef = React.useRef(null);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#C67C4E",
      }}
    >
      <Tab.Screen
        name={"Home"}
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ size, focused, color }) => {
            return <Icon name="home"  size={20} color={color} />;
          },
        }}
        component={() => (
          <ScrollView style={style.wrapper}>
            <View style={style.header}>
              <LinearGradient
                colors={["#131313", "#313131"]}
                style={{
                  height: 225,
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: 0,
                }}
              />

              <View style={style.headerInfor}>
                <View style={{}}>
                  <Text style={style.location}>Location</Text>
                  <Text style={style.nameLocation}>VietNam</Text>
                </View>
                {route.params && route.params.avatar ? (
                  <Image
                    source={route.params.avatar}
                    style={{ width: 44, height: 44 }}
                  />
                ) : (
                  <DefaultAvatar />
                )}
              </View>

              <View style={style.searchBar}>
                <Image source={SearchIcon} style={{ width: 20, height: 20 }} />
                <TextInput
                  style={{
                    color: "#989898",
                    outlineStyle: "none",
                    flex: 1,
                    fontSize: 16,
                  }}
                  //   onChangeText={(text) => {  }}
                  //   value={}
                  placeholder="Search coffee"
                />
                <Pressable
                  style={{
                    width: 44,
                    height: 44,
                    backgroundColor: "#C67C4E",
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onPress={() => {}}
                >
                  <Image
                    source={SettingIcon}
                    style={{ width: 20, height: 20 }}
                  />
                </Pressable>
              </View>
              <Banner />
            </View>

            <View style={style.content}>
              <ScrollView
                style={{ flexDirection: "row", gap: 10 }}
                horizontal={true}
                scrollEnabled={true}
                ref={scrollRef}
              >
                {DataCoffees.map((item) => (
                  <Pressable
                    key={item}
                    onPress={() => {
                      setActived(item.cateName);
                      setCoffees(item.options);
                    }}
                    style={[
                      {
                        padding: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        borderBottomLeftRadius: 8,
                        borderBottomRightRadius: 8,
                        marginRight: 10,
                      },
                      {
                        backgroundColor:
                          actived === item.cateName ? "#C67C4E" : "#F3F3F3",
                      },
                    ]}
                  >
                    <Text
                      style={{
                        color:
                          actived === item.cateName ? "#FFFFFF" : "#2F4B4E",
                      }}
                    >
                      {item.cateName}
                    </Text>
                  </Pressable>
                ))}
              </ScrollView>

              <View style={style.products}>
                {coffees.length > 0 &&
                  coffees.map((items, index) => (
                    <CoffeeItem key={index} {...items} />
                  ))}
              </View>
            </View>
          </ScrollView>
        )}
      />
      <Tab.Screen
        name="Heart"
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ size, focused, color }) => {
            return <Icon name="heart" size={20} color={color} />;
          },
        }}
        component={() => <View style={{}}>screen3</View>}
      />

      <Tab.Screen
        name="Cart"
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ size, focused, color }) => {
            return <Icon name="shopping-cart" size={20} color={color} />;
          },
        }}
        component={() => <View style={{}}>screen1</View>}
      />

      <Tab.Screen
        name="Bell"
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ size, focused, color }) => {
            return <Icon name="bell" size={20} color={color} />;
          },
        }}
        component={() => <View style={{}}>screen2</View>}
      />
    </Tab.Navigator>
  );
}
