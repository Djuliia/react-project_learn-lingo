import { theme } from 'theme';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing(12)};
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: ${theme.spacing(12)};

  @media screen and (max-width: 1024px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const BoxWrapper = styled.div`
  padding: 98px 108px 98px 64px;
  border-radius: 30px;
  background-color: #f8f8f8;

  @media screen and (max-width: 767px) {
    padding: 0px;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 500;
  line-height: 1.17;
  letter-spacing: -2%;
  max-width: 560px;
  padding-bottom: ${theme.spacing(16)};
`;

export const Fill = styled.span`
  background: ${theme.colors.fill};
  font-style: italic;
  border-radius: 8px;
`;

export const Text = styled.p`
  line-height: 1.38;
  letter-spacing: -2%;
  padding-bottom: ${theme.spacing(32)};
  max-width: 471px;
`;

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  width: 267px;
  background-color: ${theme.colors.accent};
  border-radius: 12px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.56;
  transition: ${theme.transition};

  &:hover {
    background-color: ${theme.colors.lightAccent};
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  border: 1.5px dashed ${theme.colors.accent};
  justify-content: center;
  border-radius: 30px;
  padding: 5px;
  gap: ${theme.spacing(20)};
  padding: 40px;
  @media screen and (min-width: 768px) {
    gap: ${theme.spacing(50)};
    padding: 40px 123px;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(8)};
`;

export const Number = styled.span`
  font-size: 28px;
  font-weight: 500;
  line-height: 1.14;
  letter-spacing: -2%;
`;

export const Span = styled.span`
  color: ${theme.colors.lightText};
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -2%;
  width: 96px;
`;

export const ImgWrap = styled.div``;
