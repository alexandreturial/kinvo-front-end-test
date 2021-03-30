import React from 'react';
import logo from '../../Styles/assets/logo.svg';
import CardOption from '../CardOption';

import { 
  GiBigDiamondRing 
} from 'react-icons/gi';

import { 
  BsList 
} from 'react-icons/bs';

import { 
  Container,
  Options,
  Option
} from './styles';

const Header: React.FC = () => {
  return (
      <Container>
        <img src={logo} alt="logo"/>
        <Options>
          <Option>
            <CardOption
              name='Saldo bruto'
              description='123.123.123,22'
            >
              <div className='icon-backgorund'>
                <GiBigDiamondRing size={20} color='white'/>
              </div>
            </CardOption>
          </Option>
          <Option>
            <CardOption
              name='total parcial'
              description='123.123.123,22'
            >
              <div className='icon-backgorund'>
                <GiBigDiamondRing size={20} color='white'/>
              </div>
            </CardOption>
          </Option>
          <Option>
            <CardOption
              name='retabilidade'
              description='123.123.123,22'
            >
              <div className='icon-backgorund'>
                <GiBigDiamondRing size={20} color='white'/>
              </div>
            </CardOption>
          </Option>
          <Option>
            <CardOption
              name='carteira'
              description='Minha carteira'
            >
              <div className='icon-backgorund purple'>
                <GiBigDiamondRing size={20} color='white'/>
              </div>
            </CardOption>
          </Option>
          <Option>
            <button>
              <BsList size={16} color='white'/>
            </button>
          </Option>
        </Options>
        
      </Container>
  );
}

export default Header;