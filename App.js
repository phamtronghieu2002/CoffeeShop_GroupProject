import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/screens/Home/Home";
import Login from "./src/screens/Login/Login";
import Detail from "./src/screens/Detail/Detail";
import Order from "./src/screens/Order/Order";
const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

export default function App() {
  return(

    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="order" component={Order} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="detail" component={Detail} />
        
        </Stack.Navigator>
    </NavigationContainer>

  );
  
}
