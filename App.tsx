import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './src/styles/themes/default';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Poppins_700Bold } from '@expo-google-fonts/poppins';
import { DancingScript_400Regular, DancingScript_600SemiBold } from '@expo-google-fonts/dancing-script';
import { Home } from './src/screens/home';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold, Poppins_700Bold, DancingScript_400Regular, DancingScript_600SemiBold })

  return (
    <ThemeProvider theme={defaultTheme}>
      {
        fontsLoaded ?
        <Home /> :
        <ActivityIndicator />
      }
    </ThemeProvider>
  );
}