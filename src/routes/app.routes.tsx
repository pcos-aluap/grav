import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/home';
import { WeeklyText } from '../screens/weekly-text';

const Routes = createNativeStackNavigator({
    initialRouteName: 'Home',
    screens: {
        Home: {
            screen: Home,
            options: {
                headerShown: false
            }
        },
        WeeklyText: {
            screen: WeeklyText
        }
    }
})

export const Navigator = createStaticNavigation(Routes)