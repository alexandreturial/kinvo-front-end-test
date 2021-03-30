export const formatCurrency = (current: number):string =>{
    return current.toLocaleString(
        'pt-br', 
        {
            style: 'currency', 
            currency: 'BRL'
        });

};

export const formatCurrencyNotCipher = (current: number):string =>{
    return current.toLocaleString(
        'pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 3
    });

};