import styled, {css} from 'styled-components';

const invertedButton = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
`;

const googleButton = css`
    background-color: #4285f4;
    color: white;

    &:hover {
      background-color: #357ae8;
      border: none;
    }
`;

const buttonStyles = css`
    background-color: black;
    color: white;
    border: none;

    &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    }
`;

const selectButtonStyles = props => {
    if(props.isGoogleSignIn) {
        return googleButton;
    }

    return props.inverted ? invertedButton : buttonStyles;
}

export const CustomButtonContainer = styled.div`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    text-align: center;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: 500;
    @media screen and (max-width: 800px) {
        text-align: center;
        font-size: 0.8rem;
        letter-spacing: 0.1px;
      }
    
    cursor: pointer;
    display: flex;
    justify-content: center;

    ${selectButtonStyles}
`;
