import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { dataTypes } from '../../hook/useFetch';

type Props = {
  item: dataTypes;
};

const Result = (props: Props) => {
  const { item } = props;

  return (
    <TouchableOpacity style={styles.item}>
      <Image style={styles.image} source={{ uri: item.artworkUrl100 }}  />
      <Text style={styles.text}>{item.artistName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
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
});

export default Result;
