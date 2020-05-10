import React from 'react';
import { Header as HeaderStyle, WrapperHeader, Logo } from './header.styles';

export const Header = ({ children }) => {
    return (
        <WrapperHeader>
            <HeaderStyle>
                <a href="/">
                    <Logo src={process.env.PUBLIC_URL + '/assets/Logo_ML.png'} />
                </a>
                {children}
            </HeaderStyle>
        </WrapperHeader>
    )
}