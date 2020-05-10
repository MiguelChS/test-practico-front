import styled from 'styled-components';

export const WrapperHeader = styled.header`
  background: #FFE600;
  padding: 8px;
`;

export const Header = styled.div`
  max-width:1200px;
  margin: 0 auto;
  display: flex;
`;

export const Logo = styled.img`
  flex:0;
  margin-right:8px;
  @media(min-width: 768px) {
    margin-right: 16px;
  }
`
