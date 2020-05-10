import React from 'react';
import { Wrap, Image, WrapDescription, WrapPrice, Title, Icon } from './ProductResultCard.styles';

export const ProductResultCard = ({ data: { title, picture, price: { currency, amount }, free_shipping, id } }) => {
    return (
        <Wrap href={`/items/${id}`}>
            <Image src={picture}></Image>
            <WrapDescription>
                <WrapPrice>
                    {currency} {amount} {free_shipping ? <Icon src={process.env.PUBLIC_URL + '/assets/ic_shipping.png'} /> : null}
                </WrapPrice>
                <Title>{title}</Title>
            </WrapDescription>
        </Wrap>
    )
}