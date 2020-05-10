import styled from 'styled-components';

export const Ul = styled.ul`
    margin: 0;
    list-style: none;
    padding: 8px 0;
    display: flex;
    flex-wrap: wrap;
    @media(min-width: 768px) {
        padding: 16px 0;
    }
`;

export const Li = styled.li`
    color: #999999;
    font-size: 14px;
    line-height: 20px;
    margin-right: 8px;
`;

export const Link = styled.a`
    color: #999999;
    text-decoration: none;
    margin-right: 4px;
    :hover{
        color: #666666;
    }
`;