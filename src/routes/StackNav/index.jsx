import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Keys } from "../keys";
import { RouteComponents } from "../RouteComponents";

const Stack = createNativeStackNavigator();

export default function StackNav() {

    return (
        <Stack.Navigator initialRouteName={Keys.stop_record}>
            <Stack.Screen options={{ headerShown: false }} name={Keys.connect} component={RouteComponents.Connect} />
            <Stack.Screen options={{ headerShown: false }} name={Keys.signin} component={RouteComponents.SignIn} />
            <Stack.Screen name={Keys.stop_record} component={RouteComponents.StopRecord} />
            <Stack.Screen name={Keys.stopping_places} component={RouteComponents.StoppingPlaces} />
            <Stack.Screen name={Keys.synchronize} component={RouteComponents.Synchronize} />
        </Stack.Navigator>
    );

}