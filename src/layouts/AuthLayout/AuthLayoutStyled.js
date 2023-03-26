import styled from "styled-components";
import bgPattern from "@src/assets/images/bg-pattern.svg";

export const Auth = styled.main`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

export const Banner = styled.div.attrs({
    className: "banner",
})`
    background-color: var(--color-mine-shaft);
    background-image: url(${bgPattern});
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .desc {
        max-width: 500px;
        text-align: center;
        margin-top: 40px;
        h2 {
            font-family: var(--font-manrope-bold);
            font-size: var(--text-32);
            margin-bottom: 20px;
        }
        p {
            font-family: var(--font-manrope-semi);
            font-size: var(--text-14);
            line-height: 24px;
        }
    }
`;

export const Main = styled.div``;
