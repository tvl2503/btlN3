import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/theme';
import AppNavigator from './src/navigators';
import Button from './src/core/Button';
import SafeArea from './src/components/SafeArea';
import { BUTTON_VARIANT } from './src/constants/theme/button';
import Input from './src/core/Input';
import { View } from 'react-native';
import Typography from './src/core/Typography';

function App(): JSX.Element {
  return (
    <SafeArea>
      <View style={{ padding: 16 }}>
        <ThemeProvider theme={theme}>
          <AppNavigator />
          <Button variant={BUTTON_VARIANT.danger}>Test</Button>
          <Input placeholder="Test" />
          <Typography>
            Test Typography
          </Typography>
        </ThemeProvider>
      </View>
    </SafeArea>
  );
}

export default App;
