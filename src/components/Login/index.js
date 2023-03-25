import {useState} from 'react'

import {Container,Con,Heading,Button} from './styledComponents'

const Login=()=>{
    const [login,setLogin]=useState(true)

    const isClickButton=()=>{
        setLogin(prevState=>(!prevState))
    }

    return(
        <Container>
            <Con>
                <Heading>{!login ? "Welcome User":"Please Login"}</Heading>
                <Button onClick={isClickButton} type="button">{login ? "Login":"Logout"}</Button>
            </Con>
        </Container>
    )
}

export default Login