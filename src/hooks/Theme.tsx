import React, {createContext, useState, useContext} from 'react';

import light from '../Styles/themes/light';

interface IThemeContext{
  
    theme: ITheme;
}

interface ITheme{
    title: string;

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
    }
}
 
const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: React.FC = ({ children }) =>{
    const [theme, setTheme] = useState<ITheme>(light);

    return(
        <ThemeContext.Provider value={{theme}}>
            {children}
        </ThemeContext.Provider>
    )
}


function useTheme(): IThemeContext{
    const context = useContext(ThemeContext);

    return context;
}

export {ThemeProvider, useTheme};


