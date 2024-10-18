import React, { useEffect, useState } from 'react';
import { SignIn, SignUp } from "../types";
import SignInForm from "../components/Forms/SignInForm";
import { useLocation } from "react-router-dom";
import SignUpForm from "../components/Forms/SignUpForm";

const Auth = () => {
  const { pathname } = useLocation();
  const initialSignInState: SignIn = { email: '', password: '' };
  const initialSignUpState: SignUp = { email: '', password: '', name: '' };

  const [state, setState] = useState<SignIn | SignUp>(
    pathname === '/sign-in' ? initialSignInState : initialSignUpState
  );

  useEffect(() => {
    setState(pathname === '/sign-in' ? initialSignInState : initialSignUpState);
  }, [pathname]);

  // Логируем изменения состояния в useEffect
  useEffect(() => {
    console.log('State updated:', state);
  }, [state]);

  // 2 way binding
  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      {pathname === '/sign-in'
        ? <SignInForm state={state as SignIn} inputChangeHandler={inputChangeHandler} />
        : <SignUpForm state={state as SignUp} inputChangeHandler={inputChangeHandler} />}
    </>
  );
};

export default Auth;