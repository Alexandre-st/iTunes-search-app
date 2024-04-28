import { router } from "expo-router";
import { Button, View } from "react-native";

const NavTabs = () => {
  return (
    <View>
      <Button title='Home' onPress={() => router.push('/')} />
      <Button title='Search' onPress={() => router.push('/search')} />
    </View>
  );
}
 
export default NavTabs;