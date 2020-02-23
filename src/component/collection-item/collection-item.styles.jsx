import styled from 'styled-components';


export const CollectionCustomButton = styled.button`
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
`;

export const ImageDiv = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
`;


export const CollecctionItemContainer = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;

    &:hover {
        ${ImageDiv} {
            opacity: 0.8;
        }

        ${CollectionCustomButton} {
            opacity: 0.85;
            display: flex;
        }
    }
`;



export const CollectionFooterDiv = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`;

export const NameSpan = styled.span`
    width: 90%;
    margin-bottom: 15px;
`;

export const PriceSpan = styled.span`
    width: 10%;
`;


