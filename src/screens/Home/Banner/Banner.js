import { View, Text, ImageBackground } from "react-native";
export default function Banner() {
  return (
    <View
      style={{
        width: 315,
        height: 140,
        position: "absolute",
        alignSelf: "center",
        bottom: -70,
        overflow: "hidden",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
     
      }}
    >
      <ImageBackground
        source={{
          uri: "https://s3-alpha-sig.figma.com/img/930e/7617/51b0ae1b9d482060e7fba014a59a01c9?Expires=1698624000&Signature=RXV4-1rlBj4Tnf7807Dm1NJb76RCI21WhG4N1YisQy6aFZvrI~NLMg0j5NAuGMdRgnU~9iNIlh~TMsbjk0UDA~8~lb90-oHKAN7pYCW4WeAVXiR3lJjLZIgk-SWzTsgqJxaaArCwgoFzf8Jg5IwfJZ3pzZAlLgPzEAfohTupMw~UQu99Kcr7IV1quJ6ZOhsbyhGJxMLfgmxyHj-S675nJm6VG43y9lXE9aDGw59EobggQSsJwL9utvM1sS-sFfLWlCpFr4FrO-00QHzh2rWtz3UZAm0DpbFrVpQRc2RRNjSx63rDn43cQiAGUnuMlY07i~gs-pA5CPaCVAGfz6hR2g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        }}
        resizeMode="cover"
        style={{
          height: "100%",
          width: "100%",
          paddingTop: 17,
          paddingLeft: 29,
        }}
      >
        <View
          style={{
            backgroundColor: "red",
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            width: 50,
            height: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "white",
            }}
          >
            Promo
          </Text>
        </View>

            <Text style={{ 
              fontSize:32,
              fontWeight:600,
              color:'#FFFFFF',
              boxWithShadow: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.8,
                shadowRadius: 1,  
            }
             }}>
            Buy one get {"\n"}one Free
            </Text>

      </ImageBackground>
    </View>
  );
}
