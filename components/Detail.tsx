import { useRoute } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { dataTypes } from '../types/typesFile';
import DetailArtist from './DetailArtist';
import DetailMusic from './DetailMusic';

type Props = {
  item: dataTypes;
};

// Component to manage the different screen, for the different search
const Detail = () => {
  const route = useRoute();
  const { item } = route.params as Props;
  
  return (
    <View>
      {item.wrapperType === 'artist' ? <DetailArtist item={item} /> : <DetailMusic item={item} />}
    </View>
  );
};

export default Detail;

