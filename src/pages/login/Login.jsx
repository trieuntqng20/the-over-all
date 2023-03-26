import React from "react";
import { Main } from "./LoginStyled";
import logoIcon from "@src/assets/images/logo-icon.svg";
import logoFacebook from "@src/assets/images/social-facebook.svg";
import logoApple from "@src/assets/images/social-apple.svg";
import logoGoogle from "@src/assets/images/social-google.svg";
import { Link } from "react-router-dom";
import { PATHS } from "@src/constants";

const Login = () => {
    return (
        <Main className="form-auth">
            <div className="auth-content">
                <div className="logo">
                    <img src={logoIcon} alt="" />
                </div>
                <h2>
                    Start Your Crypto
                    <br />
                    Investment Today
                </h2>
                <div className="auth-list">
                    <a href="#">
                        <img src={logoFacebook} alt="Facebook" />
                        <span>Continue with Facebook</span>
                    </a>
                    <a href="#">
                        <img src={logoApple} alt="Apple" />
                        <span>Continue with Apple</span>
                    </a>
                    <a href="#">
                        <img src={logoGoogle} alt="Google" />
                        <span>Continue with Google</span>
                    </a>
                    <a href="#" className="btn-sign-up">
                        <span>Sign Up with phone or email</span>
                    </a>
                </div>

                <div className="auth-footer">
                    <p>Already have an account?</p>
                    <Link to={PATHS.REGISTER}>Sign In</Link>
                </div>
            </div>
        </Main>
    );
};

export default Login;
