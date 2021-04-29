import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 75%;
  margin: 0 auto;
`;

const Title = styled.div`
  font-size: 25px;
  color: #ffffff;
  font-weight: 500;
`;

const Home = () => (
  <Container>
    <Title>hello, i'm working on this.</Title>
  </Container>
);

export default Home;