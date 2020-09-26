import React from 'react'
import "./LogIn.css"
import TextInput from '../../components/TextInput/TextInput'
import Button from '../../components/Button/Button'
import TitleText from '../../components/TitleText/TitleText'

function LogIn() {
    
    return (
        <div className="login-form">
            <TitleText title="Log In" />
            <TextInput type="email" label="Email" placeholder="email@email.com"/>
            <TextInput type="password" label="Password" placeholder="password"/>
            <Button value="Log in" />
        </div>
    )
}

export default LogIn
