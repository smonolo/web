import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 75%;
  margin: 0 auto;

  @media (max-width: 800px) {
    width: 90%;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    gap: 32.8px;
  }
`;

const Title = styled.div`
  font-size: 25px;
  color: #ffffff;
  font-weight: 500;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Anchor = styled.a`
  text-decoration: none;
`;

const Item = styled.div`
  background-color: #1e1e1e;
  border-radius: 15px;
  padding: 20px 25px;
  box-sizing: border-box;
  font-size: 18px;
  color: #ffffff;
  transition: transform .2s linear;

  &:hover {
    transform: translateY(-3px);
  }
`;

const Description = styled.div`
  color: #888888;
  font-size: 16px;
  margin-top: 3px;
`;

const items = [{
  href: 'https://stemon.me',
  text: 'personal website'
}, {
  href: 'https://digicale.com',
  text: 'digicale merketing site'
}, {
  href: 'https://accounts.digicale.com',
  text: 'digicale accounts'
}, {
  href: 'https://digicale.it',
  text: 'digicale italia'
}, {
  href: 'https://top.gg',
  text: 'top.gg website'
}, {
  href: 'https://auctions.top.gg',
  text: 'top.gg auctions'
}, {
  href: 'https://client.badlion.net',
  text: 'badlion client marketing site'
}, {
  href: 'https://store.badlion.net',
  text: 'badlion client store'
}, {
  href: 'https://teamlegnanonuoto.it',
  text: 'team legnano nuoto site'
}, {
  href: 'https://aresapparel.eu',
  text: 'ares apparel marketing site'
}, {
  href: 'https://rechargepvp.com',
  text: 'rechargepvp marketing site'
}, {
  href: 'https://gylliebot.net',
  text: 'gylliebot site and dashboard'
}];

const About = () => (
  <Container>
    <Grid>
      <Title>
        frontend dev
        <br /><br />
        product lead at digicale.com
        <br />
        software engineer at top.gg
        <br />
        software engineer at badlion.net
      </Title>
      <Items>
        <Title>i've worked on</Title>
        {items.map(({ href, text }, index) => (
          <Anchor key={index} href={href} target='_blank'>
            <Item>
              {text}
              <Description>{href.replace('https://', '')}</Description>
            </Item>
          </Anchor>
        ))}
      </Items>
    </Grid>
  </Container>
);

export default About;