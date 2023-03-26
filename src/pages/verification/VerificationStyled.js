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

        h2 {
            font-size: 27px;
            line-height: 32px;
            font-family: var(--font-manrope-bold);
            margin-bottom: 16px;
            text-align: center;
        }
        p {
            margin-bottom: 24px;
            color: var(--color-silver);
            font-size: var(--text-14);
            font-family: var(--font-manrope-medium);
            line-height: 20px;
            text-align: center;
        }
    }
    .auth-form {
        width: 100%;
        display: flex;
        flex-direction: column;
        .code {
            margin-bottom: 20px;
            input::placeholder {
                color: var(--color-white);
            }
        }
        .receive {
            padding-left: 12px;
            margin-bottom: 40px;
            font-family: var(--font-manrope-medium);
            font-size: var(--text-10);
            color: var(--color-silver);
            a {
                text-decoration: none;
                color: var(--color-white);
                margin-left: 8px;
            }
        }
    }
`;

export const InputS = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 26px;
    width: 100%;
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
