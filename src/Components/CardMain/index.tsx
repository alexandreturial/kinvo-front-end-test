import React from 'react';

import { Container } from './styles';

interface ICardMainProps{
  isRow: boolean;
}

const CardMain: React.FC<ICardMainProps> = ({children, isRow}) => {
  return (
      <Container orientation={isRow}>
          {children}
      </Container>
  );
}

export default CardMain;