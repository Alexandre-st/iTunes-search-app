import { Image, Text, View } from 'react-native';
import { dataTypes } from '../types/typesFile';

type Props = {
  item: dataTypes;
};

const DetailArtist = (props: Props) => {
  const { item } = props;

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <Text>{item.primaryGenreName}</Text>
      <Text>{item.artistName}</Text>
      <Text>{item.artistType}</Text>
    </View>
  );
};

export default DetailArtist;
