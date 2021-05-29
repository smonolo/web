import React, { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { routes } from '../App';

type ItemProps = {
  grow?: boolean;
};

const Item = styled.div<ItemProps>`
  color: #ffffff;
  font-weight: 500;
  font-size: 20px;
  flex-grow: ${({ grow }) => grow ? 1 : 0};
`;

const Anchor = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

type HeaderItemProps = ItemProps & {
  path: string;
};

const HeaderItem = ({ path, grow, children }: PropsWithChildren<HeaderItemProps>) => (
  <Item grow={grow}>
    <Anchor to={path}>
      {children}
    </Anchor>
  </Item>
);

const Container = styled.div`
  width: 100%;
  margin-bottom: 50px;
  background-color: #141414;
`;

const Wrapper = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 0;

  @media (max-width: 800px) {
    width: 90%;
  }
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 3px;
  vertical-align: bottom;
`;

const Flex = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: row;
  gap: 25px;
`;

const Header = () => (
  <Container>
    <Wrapper>
      <HeaderItem path='/' grow>
        <Image
          src='https://cdn.stemon.me/VfxwQAzSdd.png'
          alt='home'
          draggable={false}
        />
      </HeaderItem>
      <Flex>
        {routes.filter(route => route.showHeader).map(({ path, text }, index) => (
          <HeaderItem key={index} path={path}>{text}</HeaderItem>
        ))}
      </Flex>
    </Wrapper>
  </Container>
);

export default Header;