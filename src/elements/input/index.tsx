import { TextInputProps } from "react-native"
import styled from "styled-components/native"

export function Input({...props}: TextInputProps) {
    return (
        <Container {...props} />
    )
}

const Container = styled.TextInput`

`