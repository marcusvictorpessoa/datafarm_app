import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Keys} from '../keys';
import {RouteComponents} from '../RouteComponents';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {Colors} from '../../themes/colors';
import Strings from '../../strings';
import {Alert, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {clearToken} from '../../utils/token';

const Tab = createBottomTabNavigator();

export default function TabNav() {
  const options_customized = {
    tabBarLabel: '',
    headerTintColor: Colors.jet,
  };

  const navigation = useNavigation();

  function handleLogout() {
    Alert.alert(
      'DataFarm',
      'Deseja sair?',
      [
        {
          text: 'não',
          style: 'cancel',
        },
        {
          text: 'sim',
          onPress: async () => {
            await clearToken();
            navigation.reset({
              index: 0,
              routes: [{name: Keys.signin}],
            });
          },
        },
      ],
      {
        cancelable: true,
        onDismiss: () => {},
      },
    );
  }

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.white,
          height: 55,
        },
        tabBarActiveBackgroundColor: Colors.alabaster,
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => handleLogout()}
            style={{marginLeft: 10}}>
            <AntDesign name="arrowleft" color={Colors.jet} size={30} />
          </TouchableOpacity>
        ),
      }}
      initialRouteName={Keys.stop_record}>
      <Tab.Screen
        name={Keys.stop_record}
        component={RouteComponents.StopRecord}
        options={{
          headerTitle: Strings.titleScreenStopRecord,
          tabBarIcon: ({size}) => (
            <FontAwesome5 name="stopwatch" color={Colors.apple} size={size} />
          ),
          ...options_customized,
        }}
      />
      <Tab.Screen
        name={Keys.synchronize}
        component={RouteComponents.Synchronize}
        options={{
          headerTitle: Strings.titleScreenSynchronize,
          tabBarIcon: ({size}) => (
            <MaterialCommunityIcons
              name="database-sync"
              color={Colors.apple}
              size={size}
            />
          ),
          ...options_customized,
        }}
      />
      <Tab.Screen
        name={Keys.stopping_places}
        component={RouteComponents.StoppingPlaces}
        options={{
          headerTitle: Strings.titleScreenStoppingPlaces,
          tabBarIcon: ({size}) => (
            <FontAwesome name="th-list" color={Colors.apple} size={size} />
          ),
          ...options_customized,
        }}
      />
    </Tab.Navigator>
  );
}
