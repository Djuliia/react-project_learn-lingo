import { theme } from 'theme';
import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 472px;

  p {
    line-height: 1.38;
    color: ${theme.colors.tertiaryText};
    margin-bottom: ${theme.spacing(10)};
  }
`;

export const Title = styled.div`
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -2%;
  padding-bottom: ${theme.spacing(10)};
`;

export const AvatarWrap = styled.div`
  display: flex;
  gap: ${theme.spacing(7)};
  padding-top: ${theme.spacing(10)};
  padding-bottom: ${theme.spacing(20)};
`;

export const Name = styled.h3`
  font-weight: 500;
  line-height: 1.5;
`;

export const Span = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  color: ${theme.colors.secondaryText};
`;
