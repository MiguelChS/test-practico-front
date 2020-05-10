import styled from 'styled-components';

export const WrapProduct = styled.div`
    display: flex;
    flex-direction: column;
    @media(min-width: 768px) {
        flex-direction: row;
    }
`;
const Text = styled.p`
    color: #333333;
`
export const TextStatus = styled(Text)`
    font-size: 14px;
    margin-bottom: 16px;
`
export const TextTitle = styled(Text)`
    font-size: 24px;
    margin-bottom: 32px;
`
export const TextPrice = styled(Text)`
    font-size: 46px;
    margin-bottom: 32px;
`
export const TitleDesctiption = styled.h1`
    font-size: 28px;
    color: #333333;
`
export const TextDescription = styled.p`
    font-size: 16px;
    color: #666666;
`
export const Button = styled.button`
    border: none;
    background: #3483FA;
    border-radius: 2px;
    cursor: pointer;
    color: white;
    width: 100%;
    padding: 8px;
    @media(min-width: 768px) {
        width: 200px;
    }
`
export const Image = styled.img`
    width: 100%;
    @media(min-width: 768px) {
        width: initial;
        max-width: 680px;
    }
`
export const WrapImage = styled.div`
    @media(min-width: 768px) {
        width: 680px;
        text-align: center;
    }
`
export const Details = styled.div`
    margin-top: 16px;
    @media(min-width: 768px) {
        margin-left:16px;
    }
`