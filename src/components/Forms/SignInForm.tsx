import React from 'react';
import {Link} from "react-router-dom";
import {LockClosedIcon, EnvelopeIcon} from "@heroicons/react/24/outline";
import GoogleSignInButton from "../Buttons/GoogleSignInButton";
import {SignIn} from "../../types";

interface Props {
  state: SignIn;
  inputChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SignInForm: React.FC<Props> = ({state, inputChangeHandler}) => {
  return (
    <div
      className="max-w-[600px] rounded-sm border border-stroke border-opacity-30 bg-white shadow-default py-3 mt-10 mx-auto">
      <div className="p-4 sm:p-12.5 xl:p-17.5">
        <h2 className="mb-5 text-2xl font-bold text-center text-burgundy sm:text-title-xl2">
          Войти
        </h2>
        <form>
          <div className="mb-4">
            <label className="mb-2.5 block font-medium text-burgundy">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                placeholder="Введите свой email"
                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-burgundy outline-none focus:border-primary focus-visible:shadow-none "
                name="email"
                value={state.email}
                onChange={inputChangeHandler}
              />
              <EnvelopeIcon className="absolute w-[22px] h-[22px] right-4 top-4 opacity-50"/>
            </div>
          </div>

          <div className="mb-6">
            <label className="mb-2.5 block font-medium text-burgundy ">
              Пароль
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="Введите пароль"
                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-burgundy outline-none focus:border-primary focus-visible:shadow-none"
                name="password"
                value={state.password}
                onChange={inputChangeHandler}
              />
              <LockClosedIcon className="absolute w-[22px] h-[22px] right-4 top-4 opacity-50"/>
            </div>
          </div>

          <div className="mb-5">
            <input
              type="submit"
              value="Войти"
              className="w-full cursor-pointer rounded-lg border bg-burgundy p-4 text-white transition hover:bg-opacity-70"
            />
          </div>

          <GoogleSignInButton/>

          <div className="mt-6 text-center text-burgundy">
            <p>
              У вас еще нет аккаунта?{'  '}
              <Link to="/sign-up" className="text-yellow">
                Зарегистрироваться
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;