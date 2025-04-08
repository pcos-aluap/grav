import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './src/styles/themes/default';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Poppins_700Bold, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { DancingScript_400Regular, DancingScript_600SemiBold } from '@expo-google-fonts/dancing-script';
import { Home } from './src/screens/home';
import { NavigationContainer } from '@react-navigation/native';
import { WeeklyText } from './src/screens/weekly-text';
import { Navigator } from './src/routes/app.routes';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
        <Navigator /> 
    </ThemeProvider>
  );
}