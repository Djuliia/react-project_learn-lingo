import { theme } from 'theme';
import styled from 'styled-components';

export const StyledBtn = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  top: 20px;
  right: 20px;

  svg {
    stroke: #000;
    transition: stroke ${theme.transition};
  }

  &:hover > svg {
    stroke: ${theme.colors.accent};
  }
`;
