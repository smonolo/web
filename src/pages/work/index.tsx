import React from 'react';
import styled from 'styled-components';
import Outlink from '../../components/outlink';
import { Anchor, Box, Container, Heading, Spacer, Text, Title } from '../../styles';
import data from './data.json';

const Flex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: transparent;
  box-sizing: border-box;
  margin-bottom: 50px;

  ${Box} {
    padding: 30px;
    background-color: transparent;
    border-radius: 0;
    display: flex;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    justify-content: space-between;

    ${Title} {
      font-size: 30px;
      color: #ffffff;
    }

    ${Text} {
      font-size: 20px;
      color: #e0e0e0;
    }

    ${Anchor} {
      color: #008cff;
      text-decoration: none;
    }

    &:first-child {
      border-top: 1px solid #303030;
    }

    &:last-child {
      border-bottom: 1px solid #303030;
    }

    @media (max-width: 1000px) {
      width: 100%;
    }
  }

  ${Box}:nth-child(even) {
    padding: 30px 40px;
    background-color: #e0e0e0;
    border-radius: 10px;
    width: 90%;

    ${Title} {
      font-size: 30px;
      color: #191919;
    }

    ${Text} {
      font-size: 20px;
      color: #303030;
    }

    @media (max-width: 1000px) {
      width: 100%;
    }
  }

  ${Box}:nth-child(4n + 4) {
    padding: 30px 40px;
    background-color: #008cff;
    border-radius: 10px;
    width: 100%;

    ${Title} {
      font-size: 30px;
      color: #ffffff;
    }

    ${Text} {
      font-size: 20px;
      color: #e0e0e0;
    }

    ${Anchor} {
      color: #ffffff;
    }
  }
`;

const Column = styled.div`
  width: fit-content;
`;

const Work = () => {
  const { activeProjects } = data;

  return (
    <Container>
      <Heading>My work.</Heading>
      <Spacer margin={30}>
        <Flex>
          {activeProjects.map((project, boxIndex) => (
            <Box key={`work-box-${boxIndex}`}>
              <Column>
                <Title>{project.name}</Title>
                <Text>{project.company}</Text>
              </Column>
              <Column>
                {project.links.map((link, linkIndex) => (
                  <Text key={`work-box-${boxIndex}-link-${linkIndex}`}>
                    <Outlink link={link} text={`${link.replace('https://', '')} ›`} />
                  </Text>
                ))}
              </Column>
            </Box>
          ))}
        </Flex>
      </Spacer>
    </Container>
  );
};

export default Work;