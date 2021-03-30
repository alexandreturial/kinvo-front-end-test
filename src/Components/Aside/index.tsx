import React from 'react';
import CardList from '../CardList';



import { Container } from './styles';

const Aside: React.FC = () => {
  return  (
      <Container>
        <CardList
          name="Classes de ativos"
          options={[{name: 'Ações'}, {name: 'Fundo'}, {name: 'Fundo imobiliario'}, {name: 'Fundo de Renda Fixa'}]}
        />
        <CardList
          name="Meus Proventos"
          options={[
            {name: 'Ações'}, {name: 'Fundo'}, {name: 'Fundo imobiliario'}, {name: 'Fundo de Renda Fixa'}
          ]}
        />
        
      </Container>
  );
}

export default Aside;