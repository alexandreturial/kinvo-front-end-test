import styled from 'styled-components';

interface IContainer{
    orientation: boolean
}

export const Container = styled.section<IContainer>`
    display: flex;
    flex-direction: ${props => props.orientation ? 'row' : 'column'};
    flex: 1;
    align-items: center;

    margin-right: .6rem;
    
    background: ${props => props.theme.colors.balck};

    border-radius: .6rem;
    box-shadow: 0px 2px 20px #0000000D;

    :last-child{
        margin-right: 0;
    }
`;   
