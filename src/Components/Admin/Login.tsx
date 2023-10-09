import { useState } from 'react';
import classes from './Login.module.scss'
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const [mail,setMail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const mailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMail(e.target.value)
    }

    const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const isFormValid = () => {
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        const mailIsValid = emailRegex.test(mail);

        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).+$/;
        const passIsValid = passwordRegex.test(password);

        return mailIsValid && passIsValid;
    }

    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(isFormValid()){
            navigate('/')
        }else{
            console.log("Wrong input!")
        }
    }
    return <div className={classes.Container}>
        <h1>Login</h1><br/>
        <form onSubmit={onSubmitHandler}>
        <div>
            <label htmlFor='mail'>Email:</label><br/>
            <input type='text' id='mail' value={mail} onChange={(e)=>mailHandler(e)}/><br/>
            <label htmlFor='pass'>Password</label><br/>
            <input type='password' id='pass' value={password} onChange={(e)=>passwordHandler(e)}/>
        </div>
        <button type='submit'>Login</button>
        </form>
    </div>
}

export default Login;