import { IconProps } from "phosphor-react-native"
import { TextInputProps } from "react-native"
import styled from "styled-components/native"

interface InputProps extends TextInputProps {
    Icon?: React.ComponentType<IconProps>
}

export function Input({ Icon, ...props }: InputProps) {
    return (
        <Container>
            {
                Icon &&
                <Icon size={20} />
            }
            <StyledInput {...props} />
        </Container>
    )
}

const Container = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;

    align-items: center;

    padding-inline: 16px;
    border-radius: 8px;
    border: 1px solid ${({theme}) => theme.COLORS.medium_gray};

    gap: 4px;
`

const StyledInput = styled.TextInput`
    width: 100%;
    font-family: ${({ theme }) => theme.FONT_FAMILY.body};
    font-size: ${({ theme }) => theme.FONT_SIZE.md}px;

    ::placeholder {
        font-family: ${({ theme }) => theme.FONT_FAMILY.body};
    }

`