import React from 'react'
import styled from 'styled-components'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { AiOutlineArrowRight } from 'react-icons/ai'


const Container = styled.div`
width: 100%%;
height: 83.7vh;
display: flex;
background-color: coral;
position: relative;

`


const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #fff7f7;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top:0;
bottom:0;
left: ${props=> props.direction === "left" && "10px"};
right: ${props=> props.direction === "right" && "10px"};
margin:auto;
cursor:pointer;
&:hover{
    opacity: 0.5;
}
`

const Wrapper = styled.div`
height:100%;
`
const Slide = styled.div`

height:100vh;
display: flex;
align-items: center;
`
const ImgContainer = styled.div`
height:100%;
flex:1;
`
const InfoContaner = styled.div`
flex:1;
`
const Image = styled.img`
height:84%;
width: 99.1vw;
`

const Slider = ()=> {
    return (
        <Container>
<Arrow direction="left">
<AiOutlineArrowLeft />


</Arrow>
<Wrapper>
    <Slide>
<ImgContainer>
        <Image src="https://www.moneysavingexpert.com/content/dam/mse/images/hero/hero-shopping-CheapOnlineShop.jpg" />
</ImgContainer>
<InfoContaner>


</InfoContaner>
</Slide>
</Wrapper>
<Arrow direction="right">
    <AiOutlineArrowRight />
</Arrow>

        </Container>

    )
}
export default Slider;