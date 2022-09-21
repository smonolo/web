import React from 'react';

import Outlink from '../../components/outlink';

import { Container, Heading, Spacer, Text, Anchor, Title } from '../../styles';
import { Column, ContactBox, Item } from './styles';
import data from './data.json';

function Contact() {
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
}

export default Contact;