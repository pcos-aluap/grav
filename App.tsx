import { View } from 'react-native'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './src/styles/themes/default'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { Poppins_700Bold, Poppins_600SemiBold } from '@expo-google-fonts/poppins'
import { DancingScript_400Regular, DancingScript_600SemiBold } from '@expo-google-fonts/dancing-script'
import * as SplashScreen from 'expo-splash-screen'
import { Navigator } from './src/routes/app.routes'
import { NavigationContainer } from '@react-navigation/native'
import { useCallback, useEffect, useState } from 'react'
import { hasLastPeriodDate } from './src/utils/async-storage'

SplashScreen.preventAutoHideAsync()

SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

export default function App() {
  const [initialRoute, setInitialRoute] = useState('Home')
  const [appIsReady, setAppIsReady] = useState(false)
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Poppins_600SemiBold,
    Poppins_700Bold,
    DancingScript_400Regular,
    DancingScript_600SemiBold
  })

  useEffect(() => {
    async function prepare() {
      try {
        const shouldLoadLastPeriodDateModal = await hasLastPeriodDate()

        console.log(shouldLoadLastPeriodDateModal)

        if (shouldLoadLastPeriodDateModal) {
          setInitialRoute('WeeklyText')
        }
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e)
      } finally {
        setAppIsReady(true)
      }
    }

    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady && fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [appIsReady, fontsLoaded])

  if (!appIsReady || !fontsLoaded) {
    return null
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#FFDAB9' }} onLayout={onLayoutRootView}>
      <ThemeProvider theme={defaultTheme} >
        <NavigationContainer>
          <Navigator initialRoute={initialRoute} />
        </NavigationContainer>
      </ThemeProvider>
    </View>
  );
}