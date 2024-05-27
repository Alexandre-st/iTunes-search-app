import { createStackNavigator } from '@react-navigation/stack';
import Detail from '../detailId/Detail';
import Home from '../home/Home';
import Search from '../search/Search';

const Stack = createStackNavigator();

const Root = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Search' component={Search} />
      <Stack.Screen name='Detail' component={Detail} />
    </Stack.Navigator>
  );
};

export default Root;

