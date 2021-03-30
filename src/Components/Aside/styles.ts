import styled from 'styled-components';

export const Container = styled.ul`
  height: calc(100vh - 5.62rem);
  grid-area: AS;
  background: ${props => props.theme.colors.balck};

  display:flex;
  flex-direction: column;

  overflow-y: scroll;
  ::-webkit-scrollbar{
    display: none;    
  }
 
`;

