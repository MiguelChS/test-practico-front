import styled from 'styled-components';

export const Wrap = styled.a`
    display: flex;
    margin-bottom: 16px;
    text-decoration: none;
`;

export const Image = styled.img`
    width: 180px;
    height: 180px;
    border-radius: 4px;
    margin-right: 16px;
    flex: 1;
    @media(min-width: 768px) {
        flex: initial;
    }
`

export const WrapPrice = styled.div`
    margin-bottom: 32px;    
    font-size: 24px;
    display: flex;
    align-items: center;
`

export const Icon = styled.img`
    margin-left:8px;
`

export const Title = styled.p`
    font-size: 18px;
`

export const WrapDescription = styled.div`
    padding-top: 16px;
    color: #333333;
    flex:1;
    @media(min-width: 768px) {
        flex: initial;
    }
`
