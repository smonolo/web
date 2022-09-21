import React from 'react';

import { Anchor, Box, Container, Heading, Spacer, Text, Title } from '../../styles';
import { BlueBox, Column, Grid } from './styles';

function Legal() {
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
}

export default Legal;