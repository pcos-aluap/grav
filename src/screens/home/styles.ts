import styled from "styled-components/native";

export const Container = styled.View`
    background: ${({theme}) => theme.COLORS.defaultPrimary_d};
`
export const Title = styled.Text`
    color: ${({theme}) => theme.COLORS.textOnContBr_d};
    font-family: ${({theme}) => theme.FONT_FAMILY.title};
    font-size: ${({theme}) => theme.FONT_SIZE.lg};
`