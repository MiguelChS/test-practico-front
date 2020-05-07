import React from 'react';
import { Button, Image, Input, Wrapper } from './search-box.styles';

export const SearchBox = ({ onClick, placeholder, icon, className }) => {
    return (
        <Wrapper className={className}>
            <Input placeholder={placeholder} />
            <Button>
                <Image onClick={onClick} src={icon} />
            </Button>
        </Wrapper>
    )
}