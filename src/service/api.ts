import axios from 'axios';

const urlBase = 
'https://1762dd35-8f53-49fd-8b8e-c8134a283cb4.mock.pstmn.io/getFixedIncomeClassData';

export default {
    //lista todos os investimentos
    getAllData: () => {
        return axios.get(urlBase);
    },
    
}