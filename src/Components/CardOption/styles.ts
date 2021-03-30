import styled from 'styled-components';

export const Container = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    div{
        margin-right: 0.5rem;
        p{
            font-size: 0.7rem;
            color: ${props => props.theme.colors.textColor}; 
        }
        h4{
            font-size: 1rem;
            color: ${props => props.theme.colors.textColorSecundary}; 
        }
    }
   
`;
