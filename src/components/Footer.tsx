import React from 'react';
import styled from 'styled-components';

const Spacer = styled.div`
  height: 100px;
  width: 100%;
  margin-top: 50px;
`;

const Container = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #141414;
`;

const Wrapper = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  color: #ffffff;
  font-weight: 500;
  font-size: 18px;
  justify-content: center;
  gap: 5px;

  @media (max-width: 800px) {
    width: 90%;
  }
`;

const Text = styled.div`
  width: fit-content;
`;

const Footer = () => (
  <Spacer>
    <Container>
      <Wrapper>
        <Text>monolo stefano</Text>
        <Text>p. iva 11729910965</Text>
      </Wrapper>
    </Container>
  </Spacer>
);

export default Footer;