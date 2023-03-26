import { Button } from "@src/components";
import { PATHS } from "@src/constants";
import React from "react";
import { Link } from "react-router-dom";
import { InputS, Main } from "./RegisterStyled";

const Register = () => {
    return (
        <Main className="form-auth">
            <div className="auth-content">
                <h2>
                    Create Personal
                    <br />
                    Account
                </h2>
                <div className="auth-form">
                    <InputS>
                        <label className="label">Email or phone number</label>
                        <input className="input" type="text" />
                    </InputS>
                    <InputS>
                        <label className="label">Password</label>
                        <input className="input" type="password" />
                    </InputS>
                    <Button>Create Personal Account</Button>
                </div>

                <div className="auth-footer">
                    <p>Not looking for an account?</p>
                    <Link to={PATHS.LOGIN}>Sign Up</Link>
                </div>
            </div>
        </Main>
    );
};

export default Register;
