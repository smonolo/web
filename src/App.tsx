import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Footer from './components/footer';
import Navigation from './components/navigation';

import items from './items';
import { GlobalStyle } from './styles';

function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Navigation />
            <Switch>
                {items.map((item, index) => <Route key={`route-${index}`} {...item} />)}
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}

export default App;