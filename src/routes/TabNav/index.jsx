import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Keys } from '../keys';
import { RouteComponents } from '../RouteComponents';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={Keys.stop_record} component={RouteComponents.StopRecord} />
      <Tab.Screen name={Keys.stopping_places} component={RouteComponents.StoppingPlaces} />
    </Tab.Navigator>
  );
}