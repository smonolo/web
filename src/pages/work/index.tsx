import React from 'react';
import styled from 'styled-components';
import Outlink from '../../components/outlink';
import { Anchor, Box, Container, Heading, Spacer, Text, Title } from '../../styles';
import data from './data.json';

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  border-radius: 5px;
  background-color: transparent;
  box-sizing: border-box;

  ${Box} {
    padding: 30px;
    background-color: transparent;
    border-radius: 0;

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
  }

  ${Box}:nth-child(4n + 1), ${Box}:nth-child(4n + 4) {
    padding: 30px;
    background-color: #e0e0e0;
    border-radius: 10px;

    ${Title} {
      font-size: 30px;
      color: #191919;
    }

    ${Text} {
      font-size: 20px;
      color: #303030;
    }
  }

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    gap: 20px;

    ${Box}, ${Box}:nth-child(4n + 1), ${Box}:nth-child(4n + 4) {
      padding: 30px;
      background-color: transparent;
      border-radius: 0;

      ${Title} {
        font-size: 30px;
        color: #ffffff;
      }

      ${Text} {
        font-size: 20px;
        color: #e0e0e0;
      }
    }

    ${Box}:nth-child(odd) {
      padding: 30px;
      background-color: #e0e0e0;
      border-radius: 10px;

      ${Title} {
        font-size: 30px;
        color: #191919;
      }

      ${Text} {
        font-size: 20px;
        color: #303030;
      }
    }
  }
`;

const Work = () => {
  const { activeProjects } = data;

  return (
    <Container>
      <Heading>My work.</Heading>
      <Spacer margin={30}>
        <Grid>
          {activeProjects.map((project, boxIndex) => (
            <Box key={`work-box-${boxIndex}`}>
              <Title>{project.name}</Title>
              <Text>{project.company}</Text>
              <Spacer>
                {project.links.map((link, linkIndex) => (
                  <Text key={`work-box-${boxIndex}-link-${linkIndex}`}>
                    <Outlink link={link} text={`${link.replace('https://', '')} ›`} />
                  </Text>
                ))}
              </Spacer>
            </Box>
          ))}
        </Grid>
      </Spacer>
    </Container>
  );
};

export default Work;