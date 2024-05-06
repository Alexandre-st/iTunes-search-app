import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../home/Home';
import Search from '../search/Search';

const Root = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen name='Search' component={Search} />
    </Tab.Navigator>
  );
};

export default Root;
