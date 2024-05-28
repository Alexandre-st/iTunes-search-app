import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type dataTypes = {
  artistId: string;
  artistName: string;
  artworkUrl100: string;
  artistViewUrl: string;
  trackTimeMillis: number;
  collectionCensoredName: string;
  primaryGenreName: string;
  trackCensoredName: string;
  wrapperType: string;
  artistType: string;
};

export type RootStackParamList = {
  Home: undefined;
  Detail: { item: dataTypes };
  Search: undefined;
  DetailArtist: undefined;
  DetailMusic: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export type HomeProps = {
  navigation: HomeScreenNavigationProp;
};
