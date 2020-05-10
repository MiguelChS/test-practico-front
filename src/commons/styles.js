import styled from 'styled-components';

export const Main = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 8px;
`;

export const WrapResult = styled.div`
  background: white;
  padding: 8px;
  @media(min-width: 768px) {
    padding: 16px;
  }
`

export const MjsResult = styled.p`
    font-size: 24px;
    color: #333333;
    padding: 16px;
    text-align: center;
`;
