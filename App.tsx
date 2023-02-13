import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { Text } from 'react-native';
import { theme } from './src/theme';
import AppNavigator from './src/navigators';
function App(): JSX.Element {

  return (
    <ThemeProvider theme = {theme}>
      <AppNavigator />
      <Text>
        gello
      </Text>
    </ThemeProvider>
  );
}


export default App;
