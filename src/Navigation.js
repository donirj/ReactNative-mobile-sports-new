import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationAction, NavigationContainer } from "@react-navigation/native";

import Login from "./screens/Login";
import Home from "./screens/Home"
import Profile from "./screens/Profile";
import Signin from "./screens/Signin";
import Prepare from "./screens/Prepare";

const Stack = createNativeStackNavigator()

function MyStack() {
    return(
        <Stack.Navigator
           screenOptions={{ headerShown: false }}
        >
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen 
                    name="Login" 
                    component={Login}
                    options={{presentation: 'modal'}}
                    />
            <Stack.Screen name="Profile" component={Profile}/>
            <Stack.Screen name="Signin" component={Signin}/>
            <Stack.Screen name="Prepare" component={Prepare}/>
        </Stack.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}