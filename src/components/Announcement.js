import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height: 30px;
background-color: teal;
color: white;
align-items: center;
display: flex;
justify-content: center;
padding:20px

`


const Announcement = ()=> {
    return (
        <Container>
<b>Super Deal Free Shiping on Orders Over $50</b>

        </Container>
    )
}

export default Announcement