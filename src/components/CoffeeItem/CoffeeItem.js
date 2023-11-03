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
export default function CoffeeItem({ img, price, option, name }) {
  return (

      <View
        style={{
          width: "49%",
          marginBottom: 11,
          backgroundColor: "#FFFFFF",
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
          minHeight: 238,
        }}
      >
        <Image
          source={{ uri: img }}
          style={{
            width: "100%",
            height: 132,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
          }}
        />
        <View style={{ paddingLeft: 11, gap: 10, marginTop: 5 }}>
          <Text style={{ fontSize: 16, fontWeight: 600 }}>{name}</Text>
          <Text style={{ fontSize: 12, fontWeight: 400 }}>{option}</Text>
          <View style={{ fontSize: 18, fontWeight: 600 }}>{`${price}$`}</View>
        </View>
      </View>
  );
}
