import styled from 'styled-components';

export const Container = styled.div`
    width: calc(100vw - 17.18rem);
    height: 100%;

    display: grid;
    grid-template-rows: 3.75rem 21.75rem 1fr 28rem;
    grid-gap: 0.7rem;
    grid-template-areas:
    'OV'
    'GR'
    'MR'
    'PG';

    h1{
      color: #4C309B;
      font: 800 1.3rem 'Montserrat';
    }
`;

export const Card = styled.div`
   grid-area: OV;

   display: flex;
   flex: 1;
   align-items: center;
   justify-content: space-around;

   > section{
      padding: 0.8rem 1rem;

      ::before{
         content:'';
         height: 2rem;
         width: 0.15rem;
         margin-right: .4rem;
         background: #DAE0E3;
         border-radius: 20%;
      }

      div{
         display: flex;
         flex-direction: column;
         p{
            letter-spacing: 0.45px;
            color: #4E5B61;
            font: 500 0.7rem 'Montserrat';
            color: ${props => props.theme.colors.textColorSecundary}; 
         }
         h4{
            font-size: .9rem;
            color: ${props => props.theme.colors.pupple};
         }
      }
   }
`;

export const Graph = styled.div`
   grid-area: GR;
   display: flex;
   flex: 1; 
   
`;

export const Renda = styled.div`
   grid-area: MR;
   header{
      width: 100%;

      display: flex;
      justify-content: space-between;
      flex-direction: row;

      padding: 1.3rem 1.18rem;
      border-bottom: 1px solid ${props => props.theme.colors.primary};
   }

   main{
      width: 100%;
   }

   footer{
      width: 100%;

      display: flex;
      justify-content:center;
      flex-direction: row;

      padding: 1.3rem 1.18rem;
      border-top: 1px solid ${props => props.theme.colors.primary};

      button{
         display: flex;
         flex-direction: column;
         align-items: center;
         

         background: ${props => props.theme.colors.balck};
         border: 1px solid ${props => props.theme.colors.primary};
         border-radius: .4rem;
         padding: .4rem .6rem;
         margin: 0 .5rem;
      }
   }
`;

export const PieGraph = styled.div`
   grid-area: PG;
  
   display: flex;
   flex: 1; 
  
   justify-content: space-between;
  
`;
