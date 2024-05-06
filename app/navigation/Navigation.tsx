import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import Root from '../root/Root';

const Navigation = () => {
  const [data, setData] = useState<string[]>([]);

  const fetchData = () => {
    
    fetch(`https://itunes.apple.com/search?term=patrick&limit=5&entity=musicVideo`)
    .then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        
        setData(data);
      } else {
        console.log('error');
      }
    });
  };
      
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
};

export default Navigation;
