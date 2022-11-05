import React from "react"
// import ThemeContext from './context/theme_context'
import defaultTheme from './theme/defaultTheme'
import ResponsiveDrawer from './components/Main';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Panel from './components/Panel';
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<ResponsiveDrawer/>}>
                <Route index element={<Panel/>}/>
                <Route path="surovnoma" element={<p>salom2</p>} />
                <Route path="sozlamalar" element={<p>salom3</p>} />
            </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    
  );
}

export default App;
