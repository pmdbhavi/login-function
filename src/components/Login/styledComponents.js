import styled from 'styled-components'

export const Container=styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`

export const Con=styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image:linear-gradient(to bottom,#2b2c49,#b5b9ff);
    background-size:cover;
    padding:40px;
    border-radius:10px;
`

export const Heading=styled.h1`
    color:white;
    font-size:40px;
    font-weight:bold;
`

export const Button=styled.button`
    padding:10px;
    border-width:0px;
    border-radius:10px;
    background-color: white;
    color:#303150;
    cursor: pointer;
`