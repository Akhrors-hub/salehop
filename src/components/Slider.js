import React from 'react'
import styled from 'styled-components'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { AiOutlineArrowRight } from 'react-icons/ai'


const Container = styled.div`
width: 100%%;
height: 83.7vh;
display: flex;

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
width:100vw;
height:80vh;
display: flex;
align-items: center;
`

const ImgContainer = styled.div`
height:100%;
flex:1;

`

const Image = styled.img`

height: 104%;

`
const InfoContaner = styled.div`
flex:1;
padding:20px;

`
const Title = styled.h1`
font-size:70px;

`
const Desc = styled.p`
margin: 50px 0px;
font-size:20px;
font-weight:500;
letter-spacing:3px;
`
const Button = styled.button`
padding: 10px;
font-size:20px;
background-color: transparent;
cursor: pointer;
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
<Image src="https://retailworldmagazine.com.au/wp-content/uploads/2020/09/shutterstock_725791648-scaled.jpg" />
</ImgContainer>
<InfoContaner>
<Title> SUMMER SALE</Title>
<Desc> DON'T CPMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS</Desc>
<Button>SHOW NOW</Button>
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