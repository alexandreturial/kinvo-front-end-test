import React from 'react';

import Layout from './Components/Layout';
import RendaFixa from './Pages/RendaFixa';

import { ThemeProvider } from 'styled-components';
import GlocalStyles from './Styles/global';
import { useTheme } from './hooks/Theme';


function App() {
  const {theme} = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlocalStyles/>
      <Layout>
        <RendaFixa />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
