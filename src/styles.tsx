import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.div`
  width: 70%;
  margin: 0 auto;

  @media (max-width: 800px) {
    width: 90%;
  }
`;

export const Heading = styled.div`
  font-size: 90px;
  font-weight: 500;
  color: #ffffff;

  @media (max-width: 800px) {
    font-size: 70px;
  }
`;

export const Title = styled.div`
  font-size: 40px;
  font-weight: 600;
  color: #ffffff;

  @media (max-width: 800px) {
    font-size: 30px;
  }
`;

export const Text = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #ffffff;

  @media (max-width: 800px) {
    font-size: 18px;
  }
`;

export const Box = styled.div`
  width: 100%;
  border-radius: 10px;
  padding: 45px;
  background-color: #e0e0e0;
  box-sizing: border-box;

  ${Title}, ${Text} {
    color: #191919;
  }
`;

export const Spacer = styled.div<{ margin?: number; }>`
  margin-top: ${({ margin }) => margin || 20}px;
`;

export const Anchor = styled.a`
  color: inherit;
  text-decoration: underline;
  font-size: inherit;
`;

export const Link = styled(RouterLink)`
  color: #008cff;
  text-decoration: underline;
  font-size: inherit;
`;