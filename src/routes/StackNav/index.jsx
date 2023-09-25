import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Keys } from "../keys";
import { RouteComponents } from "../RouteComponents";

export default function StackNav() {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName={Keys.connect}>
            <Stack.Screen options={{ headerShown: false }} name={Keys.connect} component={RouteComponents.Connect} />
            <Stack.Screen options={{ headerShown: false }} name={Keys.signin} component={RouteComponents.SignIn} />
            <Stack.Screen name={Keys.stop_record} component={RouteComponents.StopRecord} />
            <Stack.Screen name={Keys.stopping_places} component={RouteComponents.StoppingPlaces} />
            <Stack.Screen name={Keys.synchronize} component={RouteComponents.Synchronize} />
        </Stack.Navigator>
    );

}