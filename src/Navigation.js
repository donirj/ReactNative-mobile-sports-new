import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationAction, NavigationContainer } from "@react-navigation/native";

import Login from "./screens/Login";
import Home from "./screens/Home"
import Profile from "./screens/Profile";

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