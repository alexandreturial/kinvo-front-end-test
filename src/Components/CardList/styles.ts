import styled from 'styled-components';


export const Card = styled.li`
  background: none;

  label{
    
    display: flex;
    align-items:center;
    justify-content: space-between;
    padding: 1.12rem 0.5rem;
    border-bottom: 1px solid ${props => props.theme.colors.borderColorSecundary};
    transition: .5s;
    p{
      color: ${props => props.theme.colors.textColor}; 
    }
  }
  
  input{
    display: none;
  }

  cursor: pointer;
 

  span{
    display: flex;
    align-items:center;
    justify-content: center;
    background: #DAE0E3;
    padding: 0.3rem;
    margin-right: 0.8rem;
    border-radius: 50%;
  }

  input:checked ~ ul{
    display: flex;
  }

  input:checked ~ label > div > span{
    background: ${props => props.theme.colors.pupple};
  }

  label:hover{
    background:  ${props => props.theme.colors.tertiary};
  }
`;
export const Item = styled.div`
    display: flex;
    align-items:center;
    max-width: 51%;
    font-size: .8rem;
    text-align: left;
`;

export const CardOptions = styled.ul`
  display: none;
  flex-direction: column;
  width: 100%;
`;

export const Button = styled.button`
 width: 100%; 
    height: 100%;
    display: flex;
    align-items:center;
    justify-content: space-between; 
    text-align: left;
    
    padding: 0.6rem .5rem 0.6rem 1.3rem;

    border-bottom: 1px solid ${props => props.theme.colors.borderColor};
    transition: .5s;
    div{
      display: flex;
      align-items:center;
    }

    div > p{
      font-size: .8rem;
      color: ${props => props.theme.colors.textColor}; 
    }

    div::before{
      content: '';
      width: .6rem;
      height: .6rem;
      margin-right: .5rem;
        
      background: ${props => props.theme.colors.pupple};
        
      border-radius:50%;
    }
    :hover{
      background: ${props =>props.theme.colors.graySecundary};
    }
`;
