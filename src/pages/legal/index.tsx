import React from 'react';
import styled from 'styled-components';
import { Anchor, Box, Container, Heading, Spacer, Text, Title } from '../../styles';

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

const Column = styled.div`
  width: 100%;
`;

const BlueBox = styled(Box)`
  background-color: #008cff;
  padding: 30px;

  ${Title} {
    color: #ffffff;
    font-size: 30px;
  }

  ${Text} {
    color: #e5e5e5;
  }

  ${Anchor} {
    color: #ffffff;
    text-decoration: underline;
  }
`;

const Legal = () => {
  return (
    <Container>
      <Heading>Legal.</Heading>
      <Spacer>
        <Box>
          <Grid>
            <Column>
              <Title>Company details</Title>
              <Spacer>
                <Text>Stefano Monolo</Text>
                <Text>Corso America, 5, 20020</Text>
                <Text>Arconate (MI), Lombardia, Italia</Text>
                <Text>IT11729910965</Text>
                <Text>stefano@smnl.it</Text>
              </Spacer>
            </Column>
            <BlueBox>
              <Title>PEC</Title>
              <Text>Should know what this is if you are from Italy.</Text>
              <Spacer>
                <Text>
                  <Anchor href='mailto:s.monolo@pec.smnl.it'>s.monolo@pec.smnl.it</Anchor>
                </Text>
              </Spacer>
            </BlueBox>
          </Grid>
        </Box>
      </Spacer>
    </Container>
  );
};

export default Legal;