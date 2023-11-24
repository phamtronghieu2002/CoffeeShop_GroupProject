import { View, Text, Image, Button, Pressable, TextInput, FlatList, ScrollView } from 'react-native';
import arrow from "..//..//assets//icons/arrowLeft.png"
import heart from "..//..//assets//icons/heart.png"
function Header({detail,order,navigation,title,delivery}) {
    return ( 
        <View style={{
            flexDirection:'row',
            justifyContent:'space-between'
          }}>
            <Pressable 
            style={{width:24,height:24 }}
            onPress={() => {
              const screen =order?"detail":detail?"home":"delivery"
    
              navigation.navigate(screen,{})
            }}> 
            <Image source={arrow} style={{ width: 24, height: 24}} />
             </Pressable>

            <Text style={{ 
                fontSize:19,
                color:'#2F2D2C',
                fontWeight:'bold'

             }}>
              {title}
            </Text>

        {
   
          <Pressable 
          style={{
            width:24,
            height:24,
            visibility:(order || delivery) && 'hidden'
          }}
          > 
          <Image source={heart} style={{ width: 24, height: 24}} />
           </Pressable>
        }
          </View>
     );
}

export default Header;