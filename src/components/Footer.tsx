import React from 'react';
import styled from 'styled-components';

const Spacer = styled.div`
  height: 100px;
  width: 100%;
  margin-top: 50px;
`;

const Container = styled.div`
  width: 100%;
  border-top: 1px solid #3e3e3e;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const Wrapper = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 0;
  color: #ffffff;
  font-weight: 500;
  font-size: 20px;

  @media (max-width: 800px) {
    width: 90%;
  }
`;

const Footer = () => (
  <Spacer>
    <Container>
      <Wrapper>
        monolo stefano - p.iva 11729910965
      </Wrapper>
    </Container>
  </Spacer>
);

export default Footer;