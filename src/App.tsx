import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/navigation';
import items from './items';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Rokkitt', sans-serif;
  }

  *::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #252525;
    border-radius: 5px;
  }

  *::selection {
    background: #008cff;
    color: #ffffff;
  }
  
  body {
    margin: 0;
    padding: 0;
    background-color: #131313;
  }

  #root {
    min-height: 100vh;
  }
`;

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Navigation />
    <Switch>
      {items.map((item, index) => (
        <Route
          key={`route-${index}`}
          {...item}
        />
      ))}
    </Switch>
  </BrowserRouter>
);

export default App;
