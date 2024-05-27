import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Result from '../Result/Result';

export type dataTypes = {
  artistId: string;
  artistName: string;
  artworkUrl100: string;
  artistViewUrl: string;
};

const Search = () => {
  const [searchArtist, setSearchArtist] = useState<string>("");
  const [type, setType] = useState<string>('musicTrack');
  const [data, setData] = useState<dataTypes[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    if (!searchArtist) {
      setData([]);
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        `https://itunes.apple.com/search?term=${searchArtist}&entity=${type}&limit=1&sort=recent`
      );
      const jsonData = await response.json();
      setData(jsonData.results);
      setIsLoading(false);
    } catch (error) {
      setError(error as string);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [type]);

  return (
    <View style={{ alignItems: 'center' }}>
      <View style={buttonStyle.container}>
        <TouchableOpacity style={buttonStyle.button} onPress={() => { setType('musicArtist')}}>
          <Text>Artistes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={buttonStyle.button} onPress={() => { setType('musicTrack')}}>
          <Text>Musique</Text>
        </TouchableOpacity>
      </View>
      <View style={containerStyle.constainer}>
        <TextInput
          value={searchArtist}
          onChangeText={setSearchArtist}
          placeholder='Search Artists'
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 20,
            width: '80%',
            paddingHorizontal: 10,
          }}
        />
        <TouchableOpacity style={buttonStyle.button} onPress={fetchData}>
          <Text>Fetch</Text>
        </TouchableOpacity>
      </View>

      {isLoading && <ActivityIndicator size='large' color='#0000ff' />}
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
      <FlatList 
        data={data} 
        renderItem={({ item }) => <Result item={item} />} 
        keyExtractor={(item) => item.artistId} 
      />
    </View>
  );
};

const buttonStyle = StyleSheet.create({
  container: {
    flex: 1, 
    width: '80%',
    flexDirection: "row", 
    justifyContent: 
    'space-between',
    marginTop: 30,
    marginBottom: 80
  },
  button: {
    borderColor: '#000',
    borderWidth: 1,
    justifyContent: 'center',
    height: 40,
    padding: '3%',
  }
});

const containerStyle = StyleSheet.create({
  constainer: {
    flex: 1,
    flexDirection: 'row', 
    justifyContent: 'center',
    width: '80%',
    gap: 20
  }
});

export default Search;

