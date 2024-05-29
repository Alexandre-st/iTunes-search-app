import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Stars from 'react-native-stars';
import { dataTypes } from '../types/typesFile';

type Props = {
  item: dataTypes;
};

type storeDataTypes = {
  value: string;
};

const DetailMusic = (props: Props) => {
  const { item } = props;
  const [star, setStar] = useState<number>(0);

  const storeData = async (value: number) => {
    try {
      const jsonValue = JSON.stringify(value);
      console.log(jsonValue);

      await AsyncStorage.setItem('star', jsonValue);
    } catch (error) {
      console.error(error);
    }
  };

  const loadData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('star');

      if (jsonValue != null) {
        setStar(JSON.parse(jsonValue));
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <View style={stylesDetail.container}>
      <Text style={stylesDetail.title}>{item.artistName}</Text>
      <Image style={stylesDetail.image} source={{ uri: item.artworkUrl100 }} />
      <View style={stylesDetail.content}>
        <Text>Album : {item.collectionCensoredName}</Text>
        <Text>Meilleur single : {item.trackCensoredName}</Text>
        <Text>Genre : {item.primaryGenreName}</Text>
      </View>
      <View style={{ marginTop: 40 }}>
        <Stars
          default={star}
          update={(value: number) => {
            setStar(value);
            storeData(value);
          }}
          spacing={10}
          starSize={30}
        />
      </View>
    </View>
  );
};

export default DetailMusic;

const stylesDetail = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
    margin: 'auto',
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    marginTop: 40,
    marginBottom: 20,
  },
  content: {
    gap: 10,
  },
});

