/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
// import 'react-native-gesture-handler';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {PaperProvider} from 'react-native-paper';
import Routes from './src/routes';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import defeaultTheme from './src/theme/default.theme';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const queryClient = new QueryClient();
  return (
    <>
      <PaperProvider theme={defeaultTheme}>
        <>
          <QueryClientProvider client={queryClient}>
            <StatusBar
              barStyle={isDarkMode ? 'light-content' : 'dark-content'}
              backgroundColor={backgroundStyle.backgroundColor}
            />
            <Routes />
          </QueryClientProvider>
        </>
      </PaperProvider>
    </>
  );
};

export default App;
