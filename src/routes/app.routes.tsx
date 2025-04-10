import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/home';
import { WeeklyText } from '../screens/weekly-text';

const Stack = createNativeStackNavigator()

interface NavigatorProps {
    initialRoute: string
}

export function Navigator({ initialRoute }: NavigatorProps) {
    return (
        <Stack.Navigator initialRouteName={initialRoute}>
            <Stack.Screen 
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="WeeklyText"
                component={WeeklyText}
            />
        </Stack.Navigator>
    )
}