import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { useEffect, useState } from "react";
import { Text } from "react-native";
import { PrimaryButton } from '../../elements/primary-button';
import styled from 'styled-components/native';

export function LastPeriodModal(){
    const [ lastPeriodDate, setLastPeriodDate ] = useState(new Date())
    const [ textInputValue, setTextInputValue ] = useState("")
    const [ shouldShowDatePicker, setShouldShowDatePicker ] = useState(false)

    const onChange = (event: DateTimePickerEvent, selectedDate: Date | undefined) => {
        if(selectedDate != undefined){
            setLastPeriodDate(selectedDate)
        }
        setShouldShowDatePicker(false)
    }

    function handleOpenDatePicker() {
        setShouldShowDatePicker(true)
    }

    function handleSaveDateFromLastPeriod(){

    }

    useEffect(() => {
        setTextInputValue(lastPeriodDate.toLocaleDateString())
    }, [lastPeriodDate])

    return (
        <Container>
            <Title>Selecione a data da sua última menstruação:</Title>
            <Input 
                value={textInputValue}
                placeholder="xx/xx/xxxx"
                onPress={handleOpenDatePicker}
            />
            {
                shouldShowDatePicker &&
                <DateTimePicker
                    mode='date'
                    value={lastPeriodDate}
                    onChange={onChange}
                />
            }
            <PrimaryButton onPress={handleSaveDateFromLastPeriod}><Text>Salvar</Text></PrimaryButton>
        </Container>
    )
}

const Container = styled.View`
    display: flex;

    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 90%;
    height: 30%;

    padding: 24px;

    border-radius: 8px;

    background: ${({theme}) => theme.COLORS.warm_beige};

    gap: 16px;
`

const Title = styled.Text`
    display: inline-block;
    width: 100%;
    text-align: center;
    color: ${({theme}) => theme.COLORS.medium_gray};
    font-family: ${({theme}) => theme.FONT_FAMILY.title};
    font-size: ${({theme}) => theme.FONT_SIZE.lg}px;
`

const Input = styled.TextInput`
    font-family: ${({theme}) => theme.FONT_FAMILY.body};

    font-size: ${({theme}) => theme.FONT_SIZE.md};

    ::placeholder {
        font-family: ${({theme}) => theme.FONT_FAMILY.body};
    }
`