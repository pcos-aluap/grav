import AsyncStorage from "@react-native-async-storage/async-storage";

export function getLastPeriodDate() {

}

export function setLastPeriodDate() {

}

export async function hasLastPeriodDate(){
    const lastPeriodDate = await AsyncStorage.getItem('lastPeriodDate')

    console.log(lastPeriodDate)

    if(!lastPeriodDate){
        return false
    }

    return true
}