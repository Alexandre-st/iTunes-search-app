import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import Likes from "../components/Likes";
import { dataTypes } from "../types/typesFile";

const Favorites = () => {
  const [likes, setLikes] = useState<dataTypes[]>([]);
  const navigation = useNavigation();

  console.log(likes);
  const loadData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('favorites');
      if (jsonValue != null) {
        const likesData = JSON.parse(jsonValue) as dataTypes[];
        setLikes(likesData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const reload = navigation.addListener('focus',() => {
      loadData();
    })

    return reload;
  }, [navigation]);

  return (
    <FlatList 
      data={likes} 
      renderItem={({ item }) => <Likes item={item} />} 
      keyExtractor={(item, index) => item.artistId + index} 
      style={{ marginTop: 60 }}
    />
  );
}
 
export default Favorites;