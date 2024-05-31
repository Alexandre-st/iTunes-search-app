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
    <View style={styles.item}>
      <View style={styles.content}>
        <Image style={styles.image} source={{ uri: item.artworkUrl100 }} />
        <Text style={styles.text}>{item.artistName}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          // setLikes(item);
          removeData(item);
        }}
      >
        <Image style={styles.like} source={require('../assets/heart.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default Likes;

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
  },
});

