import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display:flex;
    flex-direction: column;
    flex:1;
    
    justify-content: space-between;
    
    main{
        margin: 0 auto;
    }
   
`;

export const Header = styled.header`
    text-align: left;
    
    border-bottom: 1px solid ${props => props.theme.colors.borderColorSecundary};
    h3{
        padding: 1rem;
        font: 400 1.2rem 'Montserrat';
        color: ${props => props.theme.colors.textColorSecundary};
    }
`;

export const Footer = styled.footer`
    text-align: left;
    padding: 0 2.5rem;
    
    border-top: 1px solid ${props => props.theme.colors.borderColorSecundary};
    display: flex;
    flex-wrap: wrap;
    div{
        padding: .8rem;
        display: flex;
        align-items: center;
        ::before{
            content: '';
            width: .6rem;
            height: .6rem;
            margin-right: .5rem;
            border-radius: 50%;
            background: ${props => props.theme.colors.borderColor};
        }
    }
    div > p{
       
        font: 400 .8rem 'Montserrat';
        color: ${props => props.theme.colors.textColorSecundary};
    }
`;

