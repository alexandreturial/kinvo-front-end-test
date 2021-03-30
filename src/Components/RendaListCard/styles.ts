import styled from 'styled-components';

interface IContainer{
    isPar: boolean
}

export const Container = styled.div<IContainer>`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-areas:
    'TY VL SL';
    grid-gap: .8rem;

    padding: 1.3rem 1.2rem;
    border-bottom: 1px solid ${props => props.theme.colors.primary};

    background: ${props => props.isPar ? 'none' : '#F8FAFB'}; 
   
`;

export const Type = styled.div`
    grid-area: TY;
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const Values = styled.div`
    grid-area: VL;

    display: flex;
    flex-direction: column;
    
    position: relative;
`;

export const ShelfLife = styled.div`
    grid-area: SL;
    display: flex;
    flex-direction: column;
    position: relative;
`;


export const Title = styled.div<IContainer>`
    display: flex;
    justify-content: space-between; 

    position: absolute;
    z-index: 1;
    
    font: 500 .8rem 'Montserrat';
    color: ${props => props.theme.colors.textColor}; 

    padding: .2rem 0rem .2rem .4rem;
   
    box-sizing: border-box;
    border-radius: .5rem .5rem 0px 0px;
    border: 1.5px solid ${props => props.theme.colors.borderColor};
 
    border-bottom: 2px solid ${props => props.isPar ? props.theme.colors.balck : props.theme.colors.graySecundary};
    svg{
        margin: 0 .8rem 0 1rem;
    }
`;

export const Description = styled.div`
    display: flex;
    justify-content: space-between;
    flex: 1;
    margin-top: 1.49rem;
    padding: .4rem;
    border: 1.5px solid ${props => props.theme.colors.borderColor};
    border-radius: 0px .5rem .5rem .5rem;
    
    h5{
        max-width: 55%;
        padding: 0rem;
        font: 500 .7rem 'Montserrat';
        color: ${props => props.theme.colors.textColorSecundary}; 
    }

    p{
      
        padding: 0rem;
        font: 500 .6rem 'Montserrat';
        color: ${props => props.theme.colors.textColorSecundary}; 
        span{
            
            font: 500 .8rem 'Montserrat';
            color: ${props => props.theme.colors.puppleScundary}; 
        }
        .info{
            color: ${props => props.theme.colors.info}; 
        }
        .success{
            color: ${props => props.theme.colors.success}; 
        }
    }
`;

