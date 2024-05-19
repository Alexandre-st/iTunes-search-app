import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import useFetch from '../../hook/useFetch';
import Result from '../Result/Result';

const Search = () => {
  const [searchArtist, setSearchArtist] = useState<string>('Booba');
  // const [debouncedSearchArtist, setDebouncedSearchArtist] = useState<string>(searchArtist);
  const { data, isLoading, error } = useFetch(searchArtist);

  // const handleClick = () => {
  //   useFetch(searchArtist);
  // };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <Text>Search !</Text> */}
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
      <TouchableOpacity>
        <Text>Fetch</Text>
      </TouchableOpacity>
      {isLoading && <ActivityIndicator size='large' color='#0000ff' />}
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
      <FlatList data={data} renderItem={({ item }) => <Result item={item} />} keyExtractor={(item) => item.artistId} />
    </View>
  );
};

export default Search;
