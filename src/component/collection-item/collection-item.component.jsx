import React from 'react';
import CustomButton from '../custom-button/custom-button.component'
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart-actions'


import { CollecctionItemContainer, 
            CollectionCustomButton, 
            CollectionFooterDiv, 
            ImageDiv, 
            NameSpan, 
            PriceSpan 
        } from './collection-item.styles'

const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item
    return (
    <CollecctionItemContainer>
        <ImageDiv 
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <CollectionFooterDiv>
            <NameSpan>{ name }</NameSpan>
            <PriceSpan className="price">{ price }</PriceSpan>
        </CollectionFooterDiv>
        <CollectionCustomButton as={CustomButton} onClick={() => addItem(item)} inverted>Add to cart</CollectionCustomButton>
    </CollecctionItemContainer>
)}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
