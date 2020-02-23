import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import { CollectionPreviewContainer, TitleH1, PreviewDiv } from './collection-preview.styles'

const CollectionPreview = ({title, items}) => (
    <CollectionPreviewContainer>
        <TitleH1>{title.toUpperCase()}</TitleH1>
        <PreviewDiv>
            {
                items.filter((item, idx) => idx < 4).map(item => (
                    <CollectionItem key={item.id} item={item}/>  
                )) 
            }
        </PreviewDiv>
    </CollectionPreviewContainer>
)

export default CollectionPreview;
