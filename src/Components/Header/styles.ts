import styled from 'styled-components';

export const Container = styled.div`
   grid-area: MH;
   
   display: flex;
   align-items: center;
   justify-content: space-between;
   
   padding: 0 1.93rem;
   background: ${props => props.theme.colors.balck};
   box-shadow: 0px 2px 20px #0000000D;
   z-index: 1;
`;

export const Options = styled.ul`
   display: flex;
   list-style: none;
   justify-content: space-between;

   li{
      padding: 0 0.5rem;
   } 
`;

export const Option = styled.li`
   .icon-backgorund{
      display: flex;
      align-items:center;
      justify-content: center;
      background: ${props => props.theme.colors.borderColor};
      padding: 0.3rem;
      border-radius: 50%;
   }
   .purple{
      background: ${props => props.theme.colors.pupple};
   }

   button{
      display: flex;
      align-items:center;
      justify-content: center;

      background: ${props => props.theme.colors.pupple};
      padding: 0.3rem;
      border-radius: 50%;

   }

`
