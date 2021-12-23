import React from 'react';
import Outlink from '../../components/outlink';
import { Box, Container, Heading, Link, Spacer, Text, Title } from '../../styles';
import data from './data.json';

const Home = () => {
  const { yearStarted, outlinks } = data;
  const yearsAgo = new Date().getFullYear() - yearStarted;

  const { esl, badlion, digicale, topgg, medal, milanoovest } = outlinks;

  return (
    <Container>
      <Heading>Hello.</Heading>
      <Spacer>
        <Box>
          <Title>Me</Title>
          <Text>
            I'm a frontend developer.
            Creator of <Outlink {...digicale} /> and other related projects. Doing web and UI development at <Outlink {...milanoovest} />.
            Previously web developer at <Outlink {...esl} /> for <Outlink {...badlion} /> and frontend engineer at <Outlink {...topgg} /> and <Outlink {...medal} />.
          </Text>
          <Spacer>
            <Text>
              I started building websites {yearsAgo} years ago. Unfortunately, the first ever website I
              made is not online anymore.
            </Text>
          </Spacer>
          <Spacer>
            <Text>
              <Link to='/contact'>Get in touch ›</Link>
            </Text>
          </Spacer>
        </Box>
      </Spacer>
    </Container>
  );
};

export default Home;