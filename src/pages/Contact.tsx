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

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 25px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Item = styled.div`
  background-color: #1e1e1e;
  border-radius: 15px;
  padding: 20px 25px;
  box-sizing: border-box;
  font-size: 14px;
  color: #aaaaaa;
  width: fit-content;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Email = styled.div`
  font-size: 18px;
  color: #ffffff;
  margin-top: 3px;
  user-select: text;
`;

const items = [{
  text: 'normal messages',
  email: 'lu3mtex@gmail.com'
}, {
  text: 'digicale',
  email: 'stefano@digicale.com'
}, {
  text: 'top.gg',
  email: 'stefano@top.gg'
}, {
  text: 'badlion client',
  email: 'stefano@badlion.net'
}, {
  text: 'legal stuff',
  email: 's.monolo@pec.smnl.it'
}];

const Contact = () => (
  <Container>
    <Title>
      choose one based on what you need to tell me
      <Flex>
        {items.map(({ text, email }, index) => (
          <Item key={index}>
            {text}
            <Email>{email}</Email>
          </Item>
        ))}
      </Flex>
      </Title>
  </Container>
);

export default Contact;