import React from 'react';

import Outlink from '../../components/outlink';

import { Box, Container, Heading, Spacer, Text, Title } from '../../styles';
import { Column, Flex } from './styles';
import data from './data.json';

function Work() {
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
}

export default Work;