import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

import { Image } from 'react-native';
import Home from '../home/Home';
import Search from '../search/Search';

const Navigation = () => {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
};

export default Navigation;

