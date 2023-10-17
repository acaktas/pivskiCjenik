import { useState } from 'react';
import classes from './Login.module.scss'
import {useNavigate} from 'react-router-dom'
import { users } from '../../constants/Users';
import { UserModel } from '../../models/UserModel';

type LoginProps = {
    session: string | null;
    setSession: (id?: string) => void;
}

const Login = (props: LoginProps) => {
    const navigate = useNavigate();
    const [mail,setMail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isValid, setIsValid] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string>("");

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
        const filterResult: UserModel[] = users.filter((user: UserModel) => user.email === mail && user.password === password)
        setIsValid(mailIsValid && passIsValid && filterResult.length !== 0)
        if(!mailIsValid){
            setErrorMessage("Invalid email addres! Please try again.")
        }else if(!passIsValid){
            setErrorMessage("Invalid password! Please try again.")
        }else if(filterResult.length === 0){
            setErrorMessage("User doesn't exist! Go to registration form to create account!")
        }
        return mailIsValid && passIsValid && filterResult.length !== 0;
    }

    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(isFormValid()){
            props.setSession("123456")
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
        {!isValid && <div className={classes.errorMessage}>{errorMessage}</div>}
        <button type='submit'>Login</button>
        </form>
    </div>
}

export default Login;