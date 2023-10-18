import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeComponent from './HomeComponent'; // Import komponen Home

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeComponent} /> {/* Gunakan komponen Home di sini */}
        {/* Definisikan juga komponen PortofolioScreen sesuai kebutuhan */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;