import * as Splash from 'expo-splash-screen'
import * as Font from 'expo-font'
import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components/native'
import { ActivityIndicator } from 'react-native'
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto'
import { Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins'
import { DancingScript_400Regular, DancingScript_600SemiBold } from '@expo-google-fonts/dancing-script'

Splash.preventAutoHideAsync()

Splash.setOptions({
    duration: 1000,
    fade: true
})

export function SplashScreen(){
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
                await new Promise(resolve => setTimeout(resolve, 2000))
            } catch (e) {
                console.warn(e)
            } finally {
                setAppIsReady(true)
            }
        }

        prepare()
    }, [])

    const onLayoutRootView = useCallback(() => {
        if(appIsReady && fontsLoaded) {
            Splash.hideAsync()
        }
    }, [appIsReady, fontsLoaded])

    if(!appIsReady || !fontsLoaded) {
        return null
    }

    return (
        <Container onLayout={onLayoutRootView}>
            <ActivityIndicator />
        </Container>
    )
}

const Container = styled.View`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({theme}) => theme.COLORS.sky_blue}
`