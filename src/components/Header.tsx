import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { routes } from '../App';

const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid #555555;
  margin-bottom: 50px;
`;

const Wrapper = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 30px 0;
`;

const Item = styled.div`
  color: #ffffff;
  font-weight: 500;
  font-size: 20px;
`;

const Anchor = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 3px;
`;

const Header = () => (
  <Container>
    <Wrapper>
      <Item>
        <Anchor to='/'>
          <Image
            src='https://cdn.stemon.me/VfxwQAzSdd.png'
            alt='home'
            draggable={false}
          />
        </Anchor>
      </Item>
      {routes.filter(route => route.showHeader).map(({ path, text }, index) => (
        <Item key={index}>
          <Anchor to={path}>{text}</Anchor>
        </Item>
      ))}
    </Wrapper>
  </Container>
);

export default Header;