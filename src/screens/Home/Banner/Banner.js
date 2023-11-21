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
          uri: "https://github-production-user-asset-6210df.s3.amazonaws.com/109363404/284637668-d840da0c-c8f1-465d-a37d-1e6f55e11f33.png",
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
