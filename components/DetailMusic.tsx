import { Image, StyleSheet, Text, View } from 'react-native';
import { dataTypes } from '../types/typesFile';

type Props = {
  item: dataTypes;
};

const DetailMusic = (props: Props) => {
  const { item } = props;

  return (
    <View style={stylesDetail.container}>
      <Text style={stylesDetail.title}>{item.artistName}</Text>
      <Image style={stylesDetail.image} source={{ uri: item.artworkUrl100 }} />
      <View style={stylesDetail.content}>
        <Text>Album : {item.collectionCensoredName}</Text>
        <Text>Meilleur single : {item.trackCensoredName}</Text>
        <Text>Genre : {item.primaryGenreName}</Text>
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
    gap: 10
  },
});

