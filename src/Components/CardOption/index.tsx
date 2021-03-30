import React from 'react';

import { Container } from './styles';

interface ICardOptionProps{
    name: string;
    description?:string;
    
}

const CardOption: React.FC<ICardOptionProps> = ({name, description, children}) => {
  return (
      <Container>
        {children}
        <div>
            <p>{name}</p>
            <h4>{description}</h4>
        </div>
      </Container>
  );
}

export default CardOption;