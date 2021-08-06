import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../../styles';
import items from './items';
import { withRouter } from 'react-router';

const Spacer = styled.div`
  margin-bottom: 40px;
`;

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 30px 0;
  box-sizing: border-box;
  border-bottom: 2px solid #353535;
`;

const Column = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 15px;

  &:first-child {
    justify-content: flex-start;
  }

  &:last-child {
    justify-content: flex-end;
  }
`;

const Item = styled(Link)<{ active: boolean; }>`
  font-size: 26px;
  font-weight: 500;
  color: #f0f0f0;
  display: block;
  text-decoration: none;
  transition: color .2s ease-in-out, border-color .2s ease-in-out;
  border-bottom: 2px solid #ffffff;
  box-sizing: border-box;

  ${({ active }) => active ? 'border-color: #008cff;' : ''}
  
  &:hover {
    color: #ffffff;
  }

  @media (max-width: 800px) {
    font-size: 22px;
  }
`;

const Navigation = () => {
  return (
    <Spacer>
      <Container>
        <Grid>
          {Object.keys(items).map((key, columnIndex) => (
            <Column key={`navigation-column-${columnIndex}`}>
              {items[key].map(({ to, content }, itemIndex) => (
                <Item
                  key={`navigation-column${columnIndex}-item-${itemIndex}`}
                  to={to}
                  active={window.location.pathname === to}
                >
                  {content}
                </Item>
              ))}
            </Column>
          ))}
        </Grid>
      </Container>
    </Spacer>
  )
};

export default withRouter(Navigation);