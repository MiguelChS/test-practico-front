import React from 'react';
import { Button, Details, Image, TextDescription, TextPrice, TextStatus, TextTitle, TitleDesctiption, WrapImage, WrapProduct } from './productCard.styles';
export const ProductCard = ({ data: { title, picture, price: { currency, amount }, sold_quantity, description, condition } }) => {
    return (
        <>
            <WrapProduct>
                <WrapImage>
                    <Image src={picture} />
                </WrapImage>
                <Details>
                    <TextStatus>{condition} {sold_quantity} vendidos</TextStatus>
                    <TextTitle>{title}</TextTitle>
                    <TextPrice>{currency} {amount}</TextPrice>
                    <Button>
                        Comprar
                    </Button>
                </Details>
            </WrapProduct>
            <TitleDesctiption>Description el producto</TitleDesctiption>
            <TextDescription>{description}</TextDescription>
        </>
    )
}