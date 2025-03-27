import { CaretLeft, CaretRight } from "phosphor-react-native";
import { View, Text, Image } from "react-native";
import styled from "styled-components/native";

interface WeeklyTextProps {
    weekNumber: number
    text: string
}

export function WeeklyText(){
    return (
        <Container>
            <Header>
                <CaretLeft size={32} />
                <Title>Semana {'6'}</Title>
                <CaretRight size={32} />
            </Header>
            <Image 
                source={{uri: 'https://www.freepik.com/free-vector/sticker-template-with-kidney-bean-isolated_16254208.htm#fromView=search&page=1&position=8&uuid=6d2d5eef-33fb-4f5f-a95f-51a450071ae0&query=bean'}}
            />
            <Card>
                <CardText>Peso: 0.05g</CardText>
                <CardText>Tamanho: 5mm</CardText>
                <CardText>Meses: 1 mês</CardText>
            </Card>
            <SubTitle>O que há de novo nesta semana?</SubTitle>
            <BodyText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quaerat expedita laboriosam voluptates, enim velit voluptatum cupiditate quibusdam amet aperiam assumenda harum nostrum 
                necessitatibus accusamus magni? Cupiditate dolorem aliquam doloribus. Non?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit harum iste facilis ab nobis aliquam vero exercitationem, 
                ipsam at assumenda quaerat placeat nisi voluptates modi perspiciatis? Saepe quo assumenda rem.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam deserunt voluptate modi reiciendis, 
                voluptatum possimus nulla corporis odio quasi odit ducimus dolores,
                assumenda ex dolore pariatur consequatur debitis, est praesentium?
            </BodyText>
        </Container>
    )
}

const Container = styled.SafeAreaView`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 16px;
`

const Header = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    padding-inline: 24px;
`

const Title = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.title};
    font-size: ${({theme}) => theme.FONT_SIZE.lg}px;
    color: ${({theme}) => theme.COLORS.dark_gray};
`

const Card = styled.View`
    width: 70%;
    height: 30%;

    background: ${({theme}) => theme.COLORS.soft_peach};

    border-radius: 8px;

    margin-top: 34px;

    box-shadow: 2px 2px 8px black;
    elevation: 5;
`

const CardText = styled.Text`
    color: ${({theme}) => theme.COLORS.medium_gray};
    font-family: ${({theme}) => theme.FONT_FAMILY.body};
    font-size: ${({theme}) => theme.FONT_SIZE.md}px;
`

const SubTitle = styled.Text`
    color: ${({theme}) => theme.COLORS.dark_gray};
    font-family: ${({theme}) => theme.FONT_FAMILY.sub_title};
    font-size: ${({theme}) => theme.FONT_SIZE.md}px;
`

const BodyText = styled.Text`
    color: ${({theme}) => theme.COLORS.medium_gray};
    font-family: ${({theme}) => theme.FONT_FAMILY.body};
    font-size: ${({theme}) => theme.FONT_SIZE.md}px;
`