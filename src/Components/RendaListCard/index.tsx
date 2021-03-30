import React from 'react';

import { formatCurrencyNotCipher } from '../../Utils/formatCurrency';


import { 
    FiAlertCircle 
} from 'react-icons/fi';

import { 
    Container, 
    Type,
    Values,
    ShelfLife,
    Title,
    Description,

} from './styles';

interface snapshotProduct{
   data: {
    due: {
        date: string;
        daysUntilExpiration: number;
      };
      fixedIncome: {
        bondType: string;
        name: string;
        portfolioProductId: number;
      };
      hasBalance: number;
      position:{
        equity: number;
        indexerLabel: string;
        indexerValue: number;
        percentageOverIndexer: number;
        portfolioPercentage: number;
        profitability: number;
        valueApplied: number;
      } ;
      productHasQuotation: number;
    }
    isPar: boolean; 
}

const RendaListCard: React.FC<snapshotProduct> = ({data, isPar}) => {
    return (
        <Container isPar={isPar}>
            <Type>
                <Title isPar={isPar}> Titulo <FiAlertCircle size={13}/> </Title>
                <Description>
                    <h5>{data.fixedIncome.name} </h5>
                    <p>
                        classe 
                        <br/>
                        <span>
                        {data.fixedIncome.bondType}
                        </span>
                    </p>
                </Description>
            </Type>
            <Values>
                <Title isPar={isPar}>Minha posição <FiAlertCircle size={13}/></Title>
                <Description>
                    <p>
                        VALOR INVES.
                        <br/>
                        <span  className="success">
                        {formatCurrencyNotCipher(data.position.valueApplied)}
                        </span>
                    </p>
                    <p>
                        SALDO BRUTO
                        <br/>
                        <span  className="success">
                        {formatCurrencyNotCipher(data.position.equity)}
                        </span>
                    </p>
                    <p>
                        RENT. 
                        <br/>
                        <span  className="success">
                        {formatCurrencyNotCipher(data.position.portfolioPercentage)}
                        </span>
                    </p>
                    <p>
                        % DA CART. 
                        <br/>
                        <span  className="success">
                        {formatCurrencyNotCipher(data.position.percentageOverIndexer)}
                        </span>
                    </p>
                    <p>
                        CDI 
                        <br/>
                        <span  className="success">
                        {formatCurrencyNotCipher(data.position.indexerValue)}
                        </span>
                    </p>
                    <p>
                        SBORE O CDI 
                        <br/>
                        <span  className="success">
                        {formatCurrencyNotCipher(data.position.percentageOverIndexer)}
                        </span>
                    </p>
                </Description>
            </Values>
            <ShelfLife>
                <Title isPar={isPar}>VENCIMENTO <FiAlertCircle size={13}/></Title>
                <Description>
                    <p>
                        DATA VENC. 
                        <br/>
                        <span className="info">
                        {data.due.date}
                        </span>
                    </p>
                    <p>
                        DIAS ATE VENC. 
                        <br/>
                        <span className="info">
                        {data.due.daysUntilExpiration}
                        </span>
                    </p>
                </Description>
            </ShelfLife>
        </Container>
    );
}

export default RendaListCard;