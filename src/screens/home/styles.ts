import styled from "styled-components/native";

export const Container = styled.View`
    background: ${({theme}) => theme.COLORS.soft_peach};
`
export const Title = styled.Text`
    color: ${({theme}) => theme.COLORS.dark_gray};
    font-family: ${({theme}) => theme.FONT_FAMILY.title};
    font-size: ${({theme}) => theme.FONT_SIZE.lg};
`