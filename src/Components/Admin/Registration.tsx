import { UserModel } from "../../models/UserModel";
import classes from "./Registration.module.scss";
import { useState } from "react";
import { users } from "../../constants/Users";
import { useNavigate } from "react-router-dom";

interface RegistrationProps {
  session: string | null;
  setSession: (id?: string) => void;
}

const Registration = (props: RegistrationProps) => {
  const navigate = useNavigate();
  const [mail, setMail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatedPassword, setRepeatedPassword] = useState<string>();
  const [isValid, setIsValid] = useState<boolean>(true);

  const mailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMail(e.target.value);
  };

  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const reapetedPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepeatedPassword(e.target.value);
  };

  const isFormValid = () => {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    const mailIsValid = emailRegex.test(mail);

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).+$/;
    const passIsValid = passwordRegex.test(password);

    const isRepeatedPasswordValid = password === repeatedPassword;

    const isNameValid = name !== "";
    const filterResult: UserModel[] = users.filter(
      (user: UserModel) => user.email === mail && user.password === password
    );
    setIsValid(
      mailIsValid &&
        passIsValid &&
        filterResult.length === 0 &&
        isRepeatedPasswordValid &&
        isNameValid
    );

    return (
      mailIsValid &&
      passIsValid &&
      filterResult.length !== 0 &&
      isRepeatedPasswordValid &&
      isNameValid
    );
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFormValid()) {
      props.setSession("123456");
      navigate("/");
    } else {
      console.log("Wrong input!");
    }
  };

  return (
    <div className={classes.Container}>
      <h1>Register</h1>
      <br />
      <form onSubmit={(e) => onSubmitHandler(e)}>
        <div>
          <label htmlFor="name">Name:</label>
          <br />
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => nameHandler(e)}
          />
          <br />
          <label htmlFor="mail">Email:</label>
          <br />
          <input
            type="text"
            id="mail"
            value={mail}
            onChange={(e) => mailHandler(e)}
          />
          <br />
          <label htmlFor="pass">Password</label>
          <br />
          <input
            type="password"
            id="pass"
            value={password}
            onChange={(e) => passwordHandler(e)}
          />
          <br />
          <label htmlFor="repeatPass">Repeate Password</label>
          <br />
          <input
            type="password"
            id="repeatPass"
            value={repeatedPassword}
            onChange={(e) => reapetedPasswordHandler(e)}
          />
        </div>
        {!isValid && <div className={classes.errorMessage}>Test</div>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
