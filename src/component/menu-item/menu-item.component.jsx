import React from 'react';
import {withRouter} from 'react-router-dom'


import {
    MenuItemContainer,
    BackgroundImageContainer,
    ContentContainer,
    ContentTitle,
    ContentSubtitle
  } from './menu-item.styles';

const MenuItem = ({title, imageUrl, size, history, match, linkUrl}) => (
    <MenuItemContainer className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <BackgroundImageContainer style= {{
            backgroundImage: `url(${imageUrl})`
        }}  className="background-image" />
        <ContentContainer className="content">
            <ContentTitle className="title">{title.toUpperCase()}</ContentTitle>
            <ContentSubtitle className="subtitle">SHOP NOW</ContentSubtitle>
        </ContentContainer>
    </MenuItemContainer>
);

export default withRouter(MenuItem);
