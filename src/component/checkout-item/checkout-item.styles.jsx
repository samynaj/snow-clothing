import styled, {css} from 'styled-components';

const SpanElement = css`
    width: 23%;
`;


export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 80px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`;

export const ImageContainer = styled.div`
    width: 23%;
    padding: 15px;
`;

export const ImageElement = styled.img`
    width: 100%;
    height: 100%;
`;

export const NameAndPriceSpan = styled.span`
    ${SpanElement}
`;

export const QuantitySpan = styled.span`
    display: flex;

    ${SpanElement}
`;

export const ArrowDiv = styled.div`
    cursor: pointer;
`;

export const ValueSpan = styled.span`
    margin: 0 10px;
`;

export const RemoveDiv = styled.div`
    padding-left: 12px;
    cursor: pointer;
`;
