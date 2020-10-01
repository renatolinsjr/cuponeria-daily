import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  height: 100px;
  width: 100vw;
  background-color: ${props => props.theme.colors.pink};

  @media (max-width: 768px) {
    height: 60px;
  }
`; 
export const HeaderContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const HeaderTitle = styled.h1`
  color: ${props => props.theme.colors.black};
  font-size: ${props => props.theme.fontSizes.large};
  text-align: center;
`;