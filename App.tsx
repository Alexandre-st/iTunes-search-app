import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import Detail from './components/Detail';
import DetailArtist from './components/DetailArtist';
import DetailMusic from './components/DetailMusic';
import Home from './screens/Home';
import Search from './screens/Search';
import { RootStackParamList } from './types/typesFile';

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const Navigator = () => {
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

const  App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='TabHome' component={Navigator} options={{ headerShown: false }} />
        <Stack.Screen name='Search' component={Search} />
        <Stack.Screen name='Detail' component={Detail} />
        <Stack.Screen name='DetailArtist' component={DetailArtist} />
        <Stack.Screen name='DetailMusic' component={DetailMusic} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;