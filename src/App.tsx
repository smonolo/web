import React, { Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

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

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Title = styled.div`
  color: #ffffff;
  font-weight: 700;
  font-size: 100px;
  border-bottom: 10px solid #008cff;
`;

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Container>
      <Title>
        hello
      </Title>
    </Container>
  </Fragment>
);

export default App;
