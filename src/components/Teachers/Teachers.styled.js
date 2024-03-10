import styled from 'styled-components';
import { theme } from 'theme';

export const Section = styled.section`
  margin-top: ${theme.spacing(16)};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BtnMore = styled.button`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 48px;
  background-color: ${theme.colors.accent};
  border: none;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.56;
  transition: background-color ${theme.transition};
  &:hover {
    background-color: ${theme.colors.lightAccent};
  }
`;
