import { Form, Field } from 'formik';
import styled from 'styled-components';
import { theme } from 'theme';
import chevron from '../../images/chevron-down.svg';

export const StyledForm = styled(Form)`
  display: flex;
  gap: ${theme.spacing(10)};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(4)};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  color: ${theme.colors.secondaryText};
`;

export const StyledField = styled(Field)`
  padding: 14px 18px;
  border-radius: 14px;
  outline: none;
  border: none;
  appearance: none;
  overflow: hidden;
  background: right 14px center no-repeat url(${chevron}), ${theme.colors.bg};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  cursor: pointer;

  &.language {
    width: 221px;
  }
  &.level {
    width: 198px;
  }
  &.price {
    width: 124px;
  }

  option {
    color: ${theme.colors.secondaryText};
  }
`;
