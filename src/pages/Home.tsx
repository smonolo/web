import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 75%;
  margin: 0 auto;

  @media (max-width: 800px) {
    width: 90%;
  }
`;

const Title = styled.div`
  font-size: 25px;
  color: #ffffff;
  font-weight: 500;
`;

const Home = () => (
  <Container>
    <Title>hello</Title>
  </Container>
);

export default Home;