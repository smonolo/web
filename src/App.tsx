import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'DM Sans', sans-serif;
  }
  
  body {
    margin: 0;
    padding: 0;
    background-color: #191919;
    position: relative;
    user-select: none;
  }
`;

type RouteProps = {
  path: string;
  component: () => JSX.Element;
  showHeader: boolean;
  text?: string;
};

export const routes: RouteProps[] = [{
  path: '/',
  component: Home,
  showHeader: false
}, {
  path: '',
  component: Home,
  showHeader: false
}];

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Header />
    <Switch>
      {routes.map(({ path, component }, index) => (
        <Route
          key={index}
          exact
          path={path}
          component={component}
        />
      ))}
    </Switch>
  </BrowserRouter>
);

export default App;
