import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/cart-icon.svg';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect'
import {toggleCartHidden} from '../../redux/cart/cart-actions';
import {selectCartItemsCount} from '../../redux/cart/cart-selector'

import { CartIconContainer, ShoppingIconImage, ItemCountSpan } from './cart-icon.styles'

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <CartIconContainer onClick={toggleCartHidden}>
        <ShoppingIconImage as={ShoppingIcon} />
        <ItemCountSpan>{itemCount}</ItemCountSpan>
    </CartIconContainer>
    
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
