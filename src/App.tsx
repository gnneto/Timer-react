import { ThemeProvider } from 'styled-components'
import { Router } from './Router';
import { BrowserRouter } from 'react-router-dom';

import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import { CyclesContexProvider } from './contexts/CyclesContext';
// import { Home } from './pages/Home';


export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContexProvider>
          <Router />
        </CyclesContexProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
