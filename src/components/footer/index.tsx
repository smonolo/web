import React from 'react';

import { Anchor, Container, Text } from '../../styles';
import { Column, Links, Row, Spacer, Wrapper } from './styles';
import data from './data.json';

function Footer() {
    return (
        <Spacer>
            <Wrapper>
                <Container>
                    <Row>
                        <Column>
                            <Text>Stefano Monolo. P.IVA: 11729910965</Text>
                        </Column>
                        <Links>
                            {data.links.map((link, index) => (
                                <Text key={index}>
                                    <Anchor href={link.url} target='_blank'>{link.text}</Anchor>
                                </Text>
                            ))}
                        </Links>
                    </Row>
                </Container>
            </Wrapper>
        </Spacer>
    );
}

export default Footer;