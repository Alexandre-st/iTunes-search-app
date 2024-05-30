import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { dataTypes } from '../types/typesFile';

type Props = {
  item: dataTypes;
};

const Likes = (props: Props) => {
  const { item } = props;
  const [likes, setLikes] = useState<dataTypes[]>([]);

  const removeData = async (key: string) => {
    try {
      const jsonValue = await AsyncStorage.getItem('favorites');
      if (jsonValue != null) {
        let likesData = JSON.parse(jsonValue) as dataTypes[];
        likesData = likesData.filter((item) => item.artistId !== key);
        await AsyncStorage.setItem('favorites', JSON.stringify(likesData));
        setLikes(likesData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const loadData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('favorites');

      if (jsonValue != null) {
        setLikes(JSON.parse(jsonValue));
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadData();
  }, [likes]);

  return (
    <View>
      <Text>Hello World</Text>
      <Text>{item.artistId}</Text>
      <Text>{item.artistName}</Text>
      <TouchableOpacity
        onPress={() => {
          removeData(item.artistId);
          // setLikes(item);
        }}
      >
        <Image style={styles.like} source={require('../assets/heart.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default Likes;

const styles = StyleSheet.create({
  like: {
    width: 20,
    height: 20,
    aspectRatio: 1,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});
