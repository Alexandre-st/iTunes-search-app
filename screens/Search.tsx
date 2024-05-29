import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Result from '../components/Result';
import { dataTypes } from '../types/typesFile';

const Search = () => {
  const [searchArtist, setSearchArtist] = useState<string>("");
  const [type, setType] = useState<string>('musicTrack');
  const [data, setData] = useState<dataTypes[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [touched, setTouched] = useState<boolean>(false);

  const fetchData = async () => {
    if (!searchArtist) {
      setData([]);
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        `https://itunes.apple.com/search?term=${searchArtist}&entity=${type}&limit=4&sort=recent`
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
        <TouchableOpacity 
          style={[buttonStyle.button, type === 'musicArtist' && buttonStyle.touched]} 
          onPress={() => { 
            setType('musicArtist');
            setTouched(true);
          }}
        >
          <Text>Artistes</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[buttonStyle.button, type === 'musicTrack' && buttonStyle.touched]} 
          onPress={() => { 
            setType('musicTrack');
            setTouched(true);
          }}
        >
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

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >

        {isLoading && (
          <ActivityIndicator size='large' color='#0000ff' />
        )}
      </View>
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
      {/* Add for the keyExtractor the index.
        Because the API can render the same artist twice. 
        And it need to have an unique ID, with the index concatenate the issue is solved.
      */}
      <FlatList 
        data={data} 
        renderItem={({ item }) => <Result item={item} />} 
        keyExtractor={(item, index) => item.artistId + index} 
        style={{ marginTop: 60 }}
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
  },
  touched: {
    backgroundColor: 'gray',
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

