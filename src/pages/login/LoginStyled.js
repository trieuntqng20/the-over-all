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
        .logo {
            max-width: 87px;
            max-height: 87px;
            object-fit: contain;
            margin-bottom: 28px;
        }
        h2 {
            font-size: 27px;
            line-height: 32px;
            font-family: var(--font-manrope-bold);
            margin-bottom: 32px;
            text-align: center;
        }
        .auth-list {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 16px;

            a {
                display: flex;
                align-items: center;
                border: 1px solid #222;
                border-radius: 12px;
                width: 100%;
                font-size: var(--text-16);
                text-decoration: none;
                color: var(--white);
                font-family: var(--font-manrope-semi);
                gap: 8px;
                padding: 16px;
                &.btn-sign-up {
                    justify-content: center;
                    background-color: var(--color-supernova);
                    color: var(--color-cod-gray);
                }
            }
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
