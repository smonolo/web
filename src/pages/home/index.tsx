import React from 'react';

import Outlink from '../../components/outlink';

import { Box, Container, Heading, Link, Spacer, Text, Title } from '../../styles';
import data from './data.json';

function Home() {
    const { yearStarted, outlinks } = data;
    const yearsAgo = new Date().getFullYear() - yearStarted;
    const { esl, badlion, breeng, topgg, medal, mayday, moonsworth } = outlinks;

    return (
        <Container>
            <Heading>Hello.</Heading>
            <Spacer>
                <Box>
                    <Title>Me</Title>
                    <Text>
                        I'm a frontend engineer at <Outlink {...moonsworth} />.
                        Co-Founder & CEO of <Outlink {...breeng}  />, a new way of finding jobs.
                        Doing web and UI development for <Outlink {...mayday} /> on the side.
                        Previously web developer at <Outlink {...esl} /> for <Outlink {...badlion} /> and
                        frontend engineer at <Outlink {...topgg} /> and <Outlink {...medal} />.
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
}

export default Home;