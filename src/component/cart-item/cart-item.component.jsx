import React from 'react';

import { CartItemContainer, ItemDetailsDiv, ItemImage, NameSpan} from './cart-item.styles'

const CartItem = ({item: {imageUrl, name, price, quantity}}) => (
    <CartItemContainer>
        <ItemImage src={imageUrl} alt="item"/>
        <ItemDetailsDiv>
            <NameSpan>{name}</NameSpan>
            <span>{quantity} x ${price}</span>
        </ItemDetailsDiv>
    </CartItemContainer>
);

export default CartItem;
