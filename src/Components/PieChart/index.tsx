import React from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { 
    Container,
    Header,
    Footer 
} from './styles';

interface IPieChartProps{
    type: string
}

const PieChart: React.FC<IPieChartProps> = ({type}, props: HighchartsReact.Props) => {
    const options: Highcharts.Options = {
        title: {
            text: ''
        },
        chart:{
            width: 350,
            height: 300,
            
        },
        series: [{
            type: 'pie',
            name:'data1', 
            innerSize: '50%',
            
            size: '50%',
            data: [
                {
                    name: 'CDB',
                 
                    y: 505370,
                   
                }, {
                    name: 'LC',
                    y: 551500,
                   
                }, {
                    name: 'Tesouro',
                    y: 312685,
                  
                }],
        }],
        
    }
    return (
          <Container>
            <Header>
                <h3>{type}</h3>
            </Header>
            <main>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                    {...props}
                        
                />
            </main>
            <Footer>
               <div>
                   <p>
                       teste
                   </p>
               </div>
            </Footer>
          </Container>
      );
}

export default PieChart;