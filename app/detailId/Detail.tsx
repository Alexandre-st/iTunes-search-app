import { Text, View } from 'react-native';
import useFetch from '../../hook/useFetch';
import { dataTypes } from '../../types/typesFile';

type Props = {
  item: dataTypes;
};

const Detail = ({ route }) => {
  // const { item } = props;
  // const { item } = route.params;

  // const { data, isLoading, error } = useFetch(item.artistId);

  return (
    <View>
      {/* <Text>{item.artistId}</Text> */}
      <Text>Detail</Text>
    </View>
  );
};

export default Detail;

