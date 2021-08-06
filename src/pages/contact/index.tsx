import React from 'react';
import styled from 'styled-components';
import Outlink from '../../components/outlink';
import { Container, Heading, Spacer, Text, Anchor, Box, Title } from '../../styles';
import data from './data.json';

const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Item = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 20px 10px;
  box-sizing: border-box;
  color: #ffffff;
  font-size: 22px;
  font-weight: 500;
  justify-content: space-between;

  ${Anchor} {
    font-size: 35px;
    text-decoration: none;
    border-bottom: 2px solid transparent;
    box-sizing: border-box;
    transition: border-color .2s ease-in-out;

    &:hover {
      border-color: #008cff;
    }
  }

  ${Text} {
    color: #505050;
    font-size: 25px;
  }

  &:first-child {
    border-top: 1px solid #303030;
  }

  &:last-child {
    border-bottom: 1px solid #303030;
  }

  &:nth-child(even) {
    background-color: #008cff;
    width: 100%;
    padding: 20px;
    border-radius: 10px;

    ${Anchor} {
      color: #ffffff;

      &:hover {
        border-color: #191919;
      }

      &::selection {
        background: #000000;
      }
    }

    ${Text} {
      color: #e0e0e0;

      &::selection {
        background: #000000;
      }
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 5px;

    ${Anchor} {
      font-size: 30px;
    }

    ${Text} {
      font-size: 20px;
    }

    &:nth-child(even) {
      width: 100%;
    }
  }
`;

const ContactBox = styled(Box)`
  ${Title} {
    font-size: 35px;
  }

  ${Anchor} {
    color: #008cff;
  }
`;

const Contact = () => {
  const { emails } = data;

  return (
    <Container>
      <Heading>Get in touch.</Heading>
      <Spacer margin={30}>
        <Column>
          {emails.map(({ email, context }, index) => (
            <Item key={`contact-email-${index}`}>
              <Anchor href={`mailto:${email}`}>{email}</Anchor>
              <Text>{context}</Text>
            </Item>
          ))}
        </Column>
      </Spacer>
      <Spacer margin={70}>
        <ContactBox>
          <Title>Don't like emails?</Title>
          <Text>Fine. But you better like Discord because you may contact me there.</Text>
          <Spacer>
            <Text>
              <Outlink link='https://discord.com/users/191598787410526208' text='Reach out to me ›' />
            </Text>
          </Spacer>
        </ContactBox>
      </Spacer>
    </Container>
  );
};

export default Contact;