import React from 'react';

import { 
    GiBigDiamondRing 
} from 'react-icons/gi';
  import { 
    MdKeyboardArrowRight
} from 'react-icons/md';


import { Card, CardOptions, Item, Button } from './styles';

interface ICardListPorps{
    name: string;
    options:{
        name:string
    }[];
}

const CardList: React.FC<ICardListPorps> = ({name, options}) => {
  return (
   
    <Card>
        <input type="radio" id={name} name="option"/>
        <label htmlFor={name}>
            <Item>
                <span className='icon-backgorund'>
                <GiBigDiamondRing size={20} color='white'/>
                </span>
                <p>{name}</p>
            </Item>
            <MdKeyboardArrowRight size={20} color='gray'/>
        </label>
        <CardOptions>
            {
                options.map((element) =>(
                    <li>
                        <Button>
                            <div>
                                <p>{element.name}</p>
                            </div>
                            <MdKeyboardArrowRight size={20} color='gray'/>
                        </Button>
                    </li>
                ))
            }
            
        </CardOptions>
    </Card>
  );
}

export default CardList;