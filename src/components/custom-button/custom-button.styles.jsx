import styled, { css } from 'styled-components';

const buttonStyles = css`
    background-color: #000000;
    color: #ffffff;
    border: none;
    &:hover {
        background-color: #ffffff;
        color: #000000;
        border: 1px solid #000000;
    }
`;

const invertedButtonStyles = css`
    background-color: #ffffff;
    color: #000000;
    border: 1px solid #000000;

    &:hover {
        background-color: #000000;
        color: #ffffff;
        border: none;
    }
`;

const googleSignInStyles = css`
    background-color: #db4a39;
    color: #ffffff;

    &:hover {
        background-color: #db4437;
        border: none;
    }
`;

const getButtonStyles = props => {
    if (props.isGoogleSignIn) {
        return googleSignInStyles;
    } else if (props.inverted) {
        return invertedButtonStyles;
    } else {
        return buttonStyles;
    }
};

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bold;
    cursor: pointer;
    display: flex;
    justify-content: center;
    ${getButtonStyles}
`;