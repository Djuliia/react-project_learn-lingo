import { theme } from 'theme';
import { ErrorMessage, Field, Form } from 'formik';
import styled from 'styled-components';

export const Legend = styled.legend`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.33;
  margin-bottom: ${theme.spacing(10)};
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(20)};
`;

export const RadioWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(9)};
`;

export const RadioBox = styled.div`
  display: flex;
  gap: ${theme.spacing(4)};
`;

export const RadioField = styled(Field)`
  position: relative;
  height: 22px;
  width: 22px;
  margin-right: ${theme.spacing(4)};
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${theme.colors.bg};
    border: 2px solid rgba(18, 20, 23, 0.1);
    transform: translate(-50%, -50%);
  }

  &:checked::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 2px solid ${theme.colors.accent};
    transform: translate(-50%, -50%);
  }

  &:checked::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${theme.colors.accent};
    transform: translate(-50%, -50%);
  }
`;

export const StyledField = styled(Field)`
  padding: 16px 18px;
  border: 1px solid rgba(18, 20, 23, 0.1);
  border-radius: 12px;
  outline: none;
  &::placeholder {
    font-size: 16px;
    opacity: 1;
  }
  &:focus {
    border-color: ${theme.colors.accent};
  }
`;

export const FieldWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(9)};
`;

export const ErrorMsg = styled(ErrorMessage)`
  color: red;
  font-size: 12px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  max-width: 472px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.56;
  border-radius: 12px;
  border: none;
  background-color: ${theme.colors.accent};
  transition: ${theme.transition};
  &:hover {
    background-color: ${theme.colors.lightAccent};
  }
`;
