import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'DM Sans', sans-serif;
  }

  *::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #252525;
    border-radius: 5px;
  }
  
  body {
    margin: 0;
    padding: 0;
    background-color: #191919;
    position: relative;
    user-select: none;
  }

  #root {
    min-height: 100vh;
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
  path: '/about',
  component: About,
  showHeader: true,
  text: 'about'
}, {
  path: '',
  component: NotFound,
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
    <Footer />
  </BrowserRouter>
);

export default App;
