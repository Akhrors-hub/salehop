import React from 'react'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { FiShoppingCart } from 'react-icons/fi'
const Container = styled.div`
height: 60px;

`
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
`
const Left = styled.div`
flex:1;
display: flex;
align-items: center;
`
const Language = styled.div`
font-size:14px;
cursor: pointer;
`
const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
cursor: pointer;
`
const Input = styled.input`
border: none;
outline: none
`
const Center = styled.div`
flex:1;
text-align: center;
`
const Logo = styled.div`

`
const Right = styled.div`
flex:1;
display: flex;
justify-content: flex-end;
align-items: center;
`
const Menu = styled.div`
font-size: 14px;
cursor: pointer;
align-items: center
`
   
const MenuItem = styled.div`
padding-left: 10px;
cursor: pointer
`



const Navbar = ()=> {
    return (
        <Container>
           
            <Wrapper>
          <Left>
            <Language><b>EN</b></Language>
            <SearchContainer>
            <Input />
            <FaSearch style={{color:"gray", fontSize:16}} />
            </SearchContainer>
          </Left>
          <Center>
            <Logo><h1>SALE.HOP</h1></Logo>

          </Center>
          <Right>
           
            <MenuItem><b>REGISTER</b></MenuItem>
            <MenuItem><b>SIGN IN</b></MenuItem>
            <MenuItem><FiMail /></MenuItem>
            <MenuItem><FiShoppingCart /></MenuItem>
           

          </Right>
            </Wrapper>
        </Container>
    )
}
export default Navbar