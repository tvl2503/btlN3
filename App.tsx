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
import CheckBox from './src/core/CheckBox';
import PortalProvider from './src/core/Portal/PortalProvider';

function App(): JSX.Element {
  return (
    <>
      <ThemeProvider theme={theme}>
        <PortalProvider>
          {/* <SafeArea> */}
          {/* <View style={{ padding: 16 }}> */}
          <AppNavigator />
          {/* <Button variant={BUTTON_VARIANT.text}>Test</Button>
              <Input placeholder="Test" />
              <Typography>Test Typography</Typography>
              <CheckBox/> */}
          {/* </View>
        </SafeArea> */}
        </PortalProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
