import { Button } from "@src/components";
import { PATHS } from "@src/constants";
import React from "react";
import { Link } from "react-router-dom";
import { InputS, Main } from "./VerificationStyled";

const Verification = () => {
    return (
        <Main>
            <div className="auth-content">
                <h2>Verification</h2>
                <p>
                    Enter the 8-digit Crypex security code and
                    <br /> your phone number will be verified
                </p>
                <div className="auth-list"></div>
            </div>
            <div className="auth-form">
                <InputS className="code">
                    <label className="label">VERIFICATION CODE</label>
                    <input className="input" type="text" placeholder="Enter code" />
                </InputS>
                <div className="receive">
                    Don't receive your code? <Link to="/">Resend</Link>
                </div>
                <Button>Submit</Button>
            </div>
        </Main>
    );
};

export default Verification;
