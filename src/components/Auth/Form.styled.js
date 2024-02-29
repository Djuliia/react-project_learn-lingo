import { theme } from 'theme';
import { ErrorMessage, Field } from 'formik';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 438px;
`;

export const Title = styled.div`
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -2%;
  margin-bottom: ${theme.spacing(10)};
`;

export const Text = styled.p`
  line-height: 1.38;
  margin-bottom: ${theme.spacing(20)};
`;

export const StyledField = styled(Field)`
  width: 400px;
  margin-bottom: ${theme.spacing(9)};
  padding: ${theme.spacing(9)};
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

export const Button = styled.button`
  margin-top: ${theme.spacing(20)};
  width: 438px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${theme.spacing(8)};
  background-color: ${theme.colors.accent};
  border-radius: 12px;
  border-color: transparent;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.56;
  transition: background-color ${theme.transition};
  &:hover {
    background-color: ${theme.colors.lightAccent};
  }
`;

export const EyeBtn = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  top: 0px;
  right: 17px;

  svg {
    stroke: #121417;
    transition: ${theme.transition};
  }

  &:hover > svg {
    stroke: ${theme.colors.accent};
  }
`;

export const Label = styled.label`
  position: relative;
`;

export const ErrorMsg = styled(ErrorMessage)`
  color: red;
  font-size: 12px;
`;
