import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import Likes from "../components/Likes";
import { dataTypes } from "../types/typesFile";

const Favorites = () => {
  const [likes, setLikes] = useState<dataTypes[]>([]);

  console.log(likes);
  const loadData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('likes');
      if (jsonValue != null) {
        const likesData = JSON.parse(jsonValue) as dataTypes[];
        setLikes(likesData);
        
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <FlatList 
      data={likes} 
      renderItem={({ item }) => <Likes item={item} />} 
      keyExtractor={(item, index) => item.artistId + index} 
      style={{ marginTop: 60 }}
    />
    // <Text>Hello</Text>
    // <View style={{ marginTop: 60 }}>
    //   <Text>{likes.artistId}</Text>
    //   <Text>{likes.artistName}</Text>
    // </View>
  );
}
 
export default Favorites;