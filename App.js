import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/screens/Home/Home";
import Login from "./src/screens/Login/Login";
import Detail from "./src/screens/Detail/Detail";
import Order from "./src/screens/Order/Order";
import Delivery from "./src/screens/Delivery/Delivery";
import AuthProvider from "./src/provider/authProvider";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { LoadScript } from '@preflower/react-native-web-maps'
const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDyL3u4w20QsP6weDbQEhHezSTbtsPhJ7M">
<GoogleOAuthProvider
clientId="1006934418534-v81be6jh816k8qfnvfcc0ja5ojb8cman.apps.googleusercontent.com">
      <AuthProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="delivery" component={Delivery} />
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="detail" component={Detail} />
            <Stack.Screen name="order" component={Order} />
          </Stack.Navigator>
        </NavigationContainer>
      </AuthProvider>
</GoogleOAuthProvider>
</LoadScript>
  );
}
