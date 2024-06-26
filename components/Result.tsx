import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { dataTypes } from '../types/typesFile';

type Props = {
  item: dataTypes;
};
// The result for the fetch item
const Result = (props: Props) => {
  const { item } = props;
  const navigation = useNavigation();
  const [likes, setLikes] = useState<dataTypes[]>([]);

  // Store the like in the async storage
  const storeData = async (newLike: dataTypes) => {
    try {
      const jsonValue = await AsyncStorage.getItem('favorites');
      const likesData = jsonValue != null ? JSON.parse(jsonValue) as dataTypes[] : [];
      const updatedLikes = [...likesData, newLike];
      await AsyncStorage.setItem('favorites', JSON.stringify(updatedLikes));
      setLikes(updatedLikes);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TouchableOpacity 
      style={styles.item} 
      onPress={() => navigation.navigate('Detail', { item })}
    >
      <View style={styles.content}>
        <Image style={styles.image} source={{ uri: item.artworkUrl100 }} />
        <Text style={styles.text}>{item.artistName}</Text>
      </View>
      <TouchableOpacity onPress={() => {
        // setLikes(item);
        storeData(item);
      }}
      >
        <Image
          style={styles.like}
          source={require('../assets/heart.png')}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginTop: 20,
    width: '90%',
    margin: 'auto'
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  text: {
    fontSize: 18,
    alignSelf: 'center',
  },
  like: {
    width: 20,
    height: 20,
    aspectRatio: 1,
    resizeMode: 'contain',
    alignSelf: 'center',
  }
});

export default Result;

