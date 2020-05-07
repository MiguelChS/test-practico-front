import React from 'react';
import { Header as HeaderStyle, WrapperHeader, Wraaper, Logo } from './header.styles';


export const Header = () => {
    return (
        <WrapperHeader>
            <HeaderStyle>
                <Logo src={process.env.PUBLIC_URL + '/assets/Logo_ML.png'} />
                <Wraaper
                    icon={process.env.PUBLIC_URL + '/assets/ic_Search.png'}
                    placeholder="Nunca dejes de buscar"
                    onClick={()=>{}}>
                </Wraaper>
            </HeaderStyle>
        </WrapperHeader>
    )
}
