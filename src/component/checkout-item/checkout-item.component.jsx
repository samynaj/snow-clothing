import React from 'react';
import { connect } from 'react-redux'
import { clearItemFromCart, addItem, removeItemFromCart } from '../../redux/cart/cart-actions';

import { CheckoutItemContainer, 
         ImageContainer, 
         ImageElement, 
         NameAndPriceSpan, 
         QuantitySpan,
         ArrowDiv,
         ValueSpan,
         RemoveDiv
        } from './checkout-item.styles'

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
    const {imageUrl, name, price, quantity} = cartItem
    return(
        <CheckoutItemContainer>
            <ImageContainer>
                <ImageElement src={imageUrl} alt="item"/>
            </ImageContainer>
            <NameAndPriceSpan>{name}</NameAndPriceSpan>
            <QuantitySpan>
                <ArrowDiv onClick={() => removeItem(cartItem)}>&#10094;</ArrowDiv>
                <ValueSpan>{quantity}</ValueSpan>
                <ArrowDiv onClick={() => addItem(cartItem)}>&#10095;</ArrowDiv>
            </QuantitySpan>
            <NameAndPriceSpan>{price}</NameAndPriceSpan>
            <RemoveDiv onClick={() => clearItem(cartItem)}>&#10005;</RemoveDiv>
        </CheckoutItemContainer>
)}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
