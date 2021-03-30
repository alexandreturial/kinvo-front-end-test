import 'styled-components';

declare module 'styled-components'{
    export interface DefaultTheme {
        title: string,
    
        colors:{
            primary: string,
            secundary: string,
            tertiary: string,
            
            white: string          
            balck:string          
            gray:string,

            graySecundary:string,
            grayTertiary:string,

            borderColor: string,
            borderColorSecundary: string,
    
            textColor: string,
            textColorSecundary: string,

            pupple:string,
            puppleScundary:string,
            
            success:string,
            info:string,
            warning:string
        },    
    }
}