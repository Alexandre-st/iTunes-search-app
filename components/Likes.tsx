import { Text, View } from "react-native";
import { dataTypes } from "../types/typesFile";

type Props = {
  item: dataTypes;
}

const Likes = (props: Props) => {
  const { item } = props;
  return (
    <View>
      <Text>Hello World</Text>
      <Text>{item.artistId}</Text>
      <Text>{item.artistName}</Text>
    </View>
  );
}
 
export default Likes;