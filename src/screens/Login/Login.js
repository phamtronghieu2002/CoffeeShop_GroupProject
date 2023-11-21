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
import { LinearGradient } from "expo-linear-gradient";
import { useContext } from "react";
import { authContext } from "../../provider/authProvider";
import { useEffect } from "react";
import Configs from "../../configs";
import logoGG from "..//..//assets//icons/GoogleLogo.png";
import { useGoogleLogin } from "@react-oauth/google";
function Login({navigation}) {
  const { userLogin, setUserLogin } = useContext(authContext);

  const handleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${tokenResponse.access_token}`,
        },
      })
        .then((response) => response.json())
          .then((userInfo) => {
          setUserLogin({
            auth: true,
            username: userInfo.name,
            avt: userInfo.picture,
            email: userInfo.email,
          });

          navigation.navigate("home");
          
        })


        .catch((error) => {
          // Xử lý lỗi
          console.error(error);
        }); 
    },
  });

  return (
    <ScrollView
      style={{
        flex: 1,
      }}
    >
      <Image
        source={{
          uri:"https://github.com/phamtronghieu2002/CoffeeShop_GroupProject/assets/109363404/f2f7eab8-8880-47ca-ac37-1b206ea522e6"
        }}
        style={{ width: "100%", height: 650, marginTop: -180 }}
      />
      <View
        style={{
          flex: 1,
          background: "black",
          gap: 10,
          paddingLeft: 15,
          paddingRight: 15,
        }}
      >
        {/* <LinearGradient
                colors={["#00000000", "#000000"]}
                style={{
                  height: 10,
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: 0,
                }}
              /> */}
        <Text
          style={{
            textAlign: "center",
            fontSize: 34,
            color: "#FFFFFF",
            fontWeight: 500,
          }}
        >
          Coffee so good, {"\n"} your taste buds {"\n"} will love it.
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 14,
            color: "#FFFFFF",
            fontWeight: 300,
            color: "#A9A9A9",
          }}
        >
          The best grain, the finest roast, the {"\n"} powerful flavor.
        </Text>
        <Pressable
          style={{
            height: 54,
            backgroundColor: "#fff",

            gap: 15,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderBottomRightRadius: 5,
            borderBottomLeftRadius: 5,
            borderTopRightRadius: 5,

            borderTopRightRadius: 5,
          }}
          onPress={handleLogin}
        >
          <Image source={logoGG} style={{ width: 24, height: 24 }} />
          <Text
            style={{
              textAlign: "center",
              color: "red",
              fontSize: 20,
              color: "#0000008A",
            }}
          >
            {" "}
            Continue with google
          </Text>
        </Pressable>
        ;
      </View>
    </ScrollView>
  );
}

export default Login;
