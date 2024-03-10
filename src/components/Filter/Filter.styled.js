import { Form, Field } from 'formik';
import styled from 'styled-components';
import { theme } from 'theme';
import chevron from '../../images/chevron-down.svg';

export const StyledForm = styled(Form)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${theme.spacing(10)};
  margin-bottom: ${theme.spacing(16)};
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
    width: 246px;
  }
  &.price {
    width: 124px;
  }

  option {
    color: ${theme.colors.secondaryText};
  }
`;

export const BtnReset = styled.button`
  display: flex;
  align-items: center;
  padding: 16px 28px;
  color: ${theme.colors.primary};
  background: transparent;
  border: 2px solid rgba(18, 20, 23, 0.2);
  border-radius: 12px;
  height: 28px;
  margin-top: 34px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.11;
  transition: border ${theme.transition}, color ${theme.transition};
  &:hover {
    border: 2px solid ${theme.colors.accent};
    color: ${theme.colors.accent};
  }
`;
