import React,{ useEffect, useState } from 'react';
import Api from '../../service/api';

import CardMain from '../../Components/CardMain';
import RendaListCard from '../../Components/RendaListCard';

import {formatCurrency} from '../../Utils/formatCurrency';

import { 
  IoIosArrowBack,
  IoIosArrowForward
} from 'react-icons/io';

import { 
  Container,
  Card,
  Graph,
  Renda,  
  PieGraph,
} from './styles';

import LineChart from '../../Components/LineChart';
import PieChart from '../../Components/PieChart';

interface snapshotProduct{
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

interface snapshotByPortfolio{
  equity: number,
  valueApplied: number,
  equityProfit: number,
  percentageProfit: number,
  indexerValue: number,
  percentageOverIndexer: number
}

interface linechartData{
  
    correctedQuota: number;
    dailyReferenceDate: number;
    movementTypeId: number;
    portfolioProductId: number;
    productName: string;
    value: number;
  
}

const RendaFixa: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [endSearch, setEndSearch] = useState(4);
  const [startSearch, setStartSearch] = useState(0);

  const [dataInvestments, setDataInvestments] = useState([{} as snapshotProduct]);
  const [snapshotByPortfolio, setSnapshotByPortfolio] = useState({} as snapshotByPortfolio);
  const [lineChartData, setLineChartData] = useState({} as linechartData);


  useEffect(() => {
    Api.getAllData().then((e) =>{
     
      setDataInvestments(e.data.data.snapshotByProduct);
      setSnapshotByPortfolio(e.data.data.snapshotByPortfolio);
      setLineChartData(e.data.data.dailyEquityByPortfolioChartData);
      
      setIsLoading(false);
    });
  }, []);

  const nextpage = () => {
    setStartSearch(startSearch + 5);
    setEndSearch(endSearch + 4)

  }

  const previouspage = () => {
    setEndSearch(endSearch - 4);
    setStartSearch(startSearch - 5)

  }

  const pageSelect = (agr: number) => {
    setStartSearch(5 * agr);
    setEndSearch(4 + (4 * agr))

  }

  return (
    <Container>
      {
        !isLoading &&(
          <Card>
            <CardMain isRow={true}>
              <div>
                <p>SALDO BRUTO</p>
                <h4>{formatCurrency(snapshotByPortfolio.equity)}</h4>
              </div>
            </CardMain>
            <CardMain isRow={true}>
              <div>
                <p>VALOR APLICADO</p>
                <h4>{formatCurrency(snapshotByPortfolio.valueApplied)}</h4>
              </div>
            </CardMain>   
            <CardMain isRow={true}>
              <div>
                <p>RESULTADO</p>
                <h4>{formatCurrency(snapshotByPortfolio.equityProfit)}</h4>
              </div>
            </CardMain>   
            <CardMain isRow={true}>
              <div>
                <p>RENTABILIDADE</p>
                <h4>{snapshotByPortfolio.percentageProfit} %</h4>
              </div>
            </CardMain>   
            <CardMain isRow={true}>
              <div>
                <p>CDI</p>
                <h4>{snapshotByPortfolio.indexerValue} %</h4>
              </div>
            </CardMain>   
            <CardMain isRow={true}>
              <div>
                <p>SOBRE O CDI</p>
                <h4>{snapshotByPortfolio.percentageOverIndexer} %</h4>
              </div>
            </CardMain>   
          </Card>    
        )
      }
     
      <Graph>
        <CardMain isRow={false}>
          {
            !isLoading &&(
             <LineChart chartData={lineChartData} />
            )
          }
           
        </CardMain>
      </Graph>
      <Renda>
        <CardMain isRow={false}>
          <header>
            <h4>Minhas Rendas Fixas</h4>
            <div>
              <select name="" id="">
                <option value="">Ordernar por</option>
              </select>
            </div>
          </header>
          <main>
            {
              !isLoading &&
              dataInvestments
              .filter((dataInvestment, index) => {
                if(startSearch <= index && index <= endSearch){
                  return dataInvestment
                }
              })
              .map((dataInvestment, index) =>(
                  <RendaListCard
                    key={index}
                    data={dataInvestment}
                    isPar={index % 2 === 0 ? true : false}
                  />  
              ))
            }     
          </main>
          <footer>
            <button onClick={previouspage}><IoIosArrowBack/></button> 
    
            <button onClick={nextpage}><IoIosArrowForward/></button>
          </footer>
        </CardMain>  
      </Renda>  
      <PieGraph>
        <CardMain isRow={false}>
          <PieChart type={'Divisao da carteira por tipos'}/>
        </CardMain>
        <CardMain isRow={false}>
          <PieChart type={'Divisao da carteira por titulos'}/>
        </CardMain>
       
      </PieGraph>
    </Container>
      
  );
}

export default RendaFixa;