import { theme } from 'components/theme';
import { Link } from 'react-router-dom/dist';
import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing(12)};
`;

export const Wrapper = styled.div`
  display: flex;
  gap: ${theme.spacing(12)};
`;

export const BoxWrapper = styled.div`
  padding: 98px 108px 98px 64px;
  border-radius: 30px;
  background-color: #f8f8f8;
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
`;

export const Text = styled.p`
  line-height: 1.38;
  letter-spacing: -2%;
  padding-bottom: ${theme.spacing(32)};
  max-width: 471px;
`;

export const Button = styled(Link)`
  width: 267px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: ${theme.colors.accent};
  border-radius: 12px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.56;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing(50)};
  border: 1.5px dashed ${theme.colors.accent};
  border-radius: 30px;
  padding: 40px 123px;
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
