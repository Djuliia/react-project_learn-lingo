import styled from 'styled-components';
import { theme } from 'theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(12)};
  justify-content: center;
  align-items: center;
  padding: ${theme.spacing(12)};
  border-radius: 36px;
  border: 2px solid #338af3;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

  @media screen and (min-width: 768px) {
    padding: ${theme.spacing(34)};
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: ${theme.spacing(16)};
`;
