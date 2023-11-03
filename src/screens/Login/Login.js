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
import * as WebBrowser from "expo-web-browser";
import logoGG from "..//..//assets//icons/GoogleLogo.png";
function Login() {
  return (
    <ScrollView
      style={{
        flex: 1,
      }}
    >
      <Image
        source={{
          uri: "https://s3-alpha-sig.figma.com/img/b312/299d/b7d25cf7008be3a0b1be7c883c7455df?Expires=1699833600&Signature=luIwlvzWdvXnhacEp5WF1YiYOwY~4a-S~sLjAP6UDne7HbmraEnJiOMOGC9heFASwuzgDG2r6wzcN~9cRxQ7Ga95Pkg7NV-jxu1JN96ArU4QjphzLTyWdxoFXHphl8cS6x~MwzuVoBj1Kx7m3ZcmMF61FcpMhJwcY~02ujdX8c3Y90g2ATh~IjzXpojufibooXu5f5W2dktWdQwoPfIQmlTJSmX895z7lNN3vSDi5pYAx-MFY-bFY2Vf8fZlQBsIjzD1sqgnYwJkNIutoq50w37DAjXa2tO07Ylm-pQDxE~9I21TlUvMp45XPWahGCbiSRdpSSqnxw8qmaaMJUbb3w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        }}
        style={{ width: "100%", height: 650, marginTop: -180 }}
      />
      <View style={{ flex: 1, background: "black", gap: 10,paddingLeft:15,paddingRight:15 }}>
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
            color:'#A9A9A9'
          }}
        >
          The best grain, the finest roast, the {"\n"} powerful flavor.
        </Text>
        <Pressable
          style={{
            height: 54,
            backgroundColor: "#fff",
   
            gap:15,
            flexDirection: "row",
            justifyContent:'center',
            alignItems:'center',
            borderBottomRightRadius: 5,
            borderBottomLeftRadius: 5,
            borderTopRightRadius: 5,

            borderTopRightRadius: 5,
          }}
          onPress={() => {}}
        >
          <Image source={logoGG} style={{ width: 24, height: 24 }} />
          <Text style={{ textAlign: "center", color: "red",fontSize:20 ,color:'#0000008A'}}>
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
