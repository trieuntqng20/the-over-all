import styled from "styled-components";

export const Main = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    height: 100vh;
    width: 360px;
    .auth-content {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        margin-top: -120px;
        h2 {
            font-size: 27px;
            line-height: 32px;
            font-family: var(--font-manrope-bold);
            margin-bottom: 32px;
            text-align: center;
        }
        .auth-form {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .auth-footer {
            position: absolute;
            left: 50%;
            bottom: 8vh;
            transform: translateX(-50%);
            width: 100%;
            p {
                margin-bottom: 20px;
                color: #848484;
                font-size: var(--text-14);
                font-family: var(--font-manrope-semi);
                text-align: center;
            }
            a {
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #202020;
                color: var(--white);
                font-size: var(--text-14);
                font-family: var(--font-manrope-semi);
                width: 100%;
                padding: 16px;
                border-radius: 12px;
                text-decoration: none;
            }
        }
    }
`;

export const InputS = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 26px;
    .label {
        text-transform: uppercase;
        margin-bottom: 7px;
        font-size: var(--text-10);
        font-family: var(--font-manrope-medium);
        padding-left: 16px;
    }
    .input {
        outline: 0;
        border: 1px solid #333;
        background-color: transparent;
        padding: 16px;
        color: var(--color-white);
        font-size: var(--text-12);
        font-family: var(--font-manrope-semi);
        border-radius: 12px;
        transition: border 0.3s;
        &:focus {
            border: 1px solid var(--color-white);
            transition: border 0.3s;
        }
    }
`;
