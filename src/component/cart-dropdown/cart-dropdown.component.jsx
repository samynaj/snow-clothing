import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import { selectCartItems } from '../../redux/cart/cart-selector'
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { toggleCartHidden } from '../../redux/cart/cart-actions'
import { CartDropdownContainer, CartItemsContainer, ButtonStyles, ErrorMessage } from './cart-dropdown.styles'



const CartDropdown = ({cartItems, history, dispatch}) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            {
                cartItems.length ?
                (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />))
                :
                <ErrorMessage>Your cart is empty</ErrorMessage>
            }
        </CartItemsContainer>
        <ButtonStyles as={CustomButton} onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden())
            }}>
                GO TO CHECKOUT
        </ButtonStyles>
    </CartDropdownContainer>
)

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
