import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

interface PrimaryButtonProps extends TouchableOpacityProps {
}

export function PrimaryButton({ children, ...props }: PrimaryButtonProps){
    return (
        <Container {...props} ><Title>{children}</Title></Container>
    )
}

const Container = styled.TouchableOpacity`
    display: flex;
    align-items: center;

    padding-block: 8px;

    width: 100%;
    background: ${({theme}) => theme.COLORS.coral};
    border-radius: 8px;
`

const Title = styled.Text`
    color: ${({theme}) => theme.COLORS.warm_beige};
    font-family: ${({theme}) => theme.FONT_FAMILY.button};
`