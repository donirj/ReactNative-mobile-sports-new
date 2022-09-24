import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationAction, NavigationContainer } from "@react-navigation/native";

import Login from "./screens/Login/Login";
import Home from "./screens/Home/Home"
import Profile from "./screens/Profile/Profile";
import Signin from "./screens/Signin/Signin";
import Prepare from "./screens/Prepare/Prepare";
import Favorite from "./screens/Favorite/Favorite";


const Stack = createNativeStackNavigator()

function MyStack() {
    
    return(
        <Stack.Navigator
           screenOptions={{ headerShown: false }}
           initialRouteName='Home'
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
            <Stack.Screen name="Favorite" component={Favorite}/>
            
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