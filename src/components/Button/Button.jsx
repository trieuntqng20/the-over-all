import React from "react";
import styled from "styled-components";

const Button = ({ children }) => {
    return <ButtonS>{children}</ButtonS>;
};

const ButtonS = styled.button`
    outline: 0;
    border: 0;
    background-color: var(--color-supernova);
    border-radius: 12px;
    transition: all 0.3s;
    padding: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 100%;
    font-size: var(--text-14);
    color: var(--color-cod-gray);
    font-family: var(--font-manrope-semi);
    text-transform: capitalize;
    &:hover {
        background-color: var(--color-supernova-hover);
        transition: all 0.3s;
    }
`;

export default Button;
