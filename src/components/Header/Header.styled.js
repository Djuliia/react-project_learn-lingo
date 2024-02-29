import { theme } from 'theme';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding: 20px 64px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(4)};
`;

export const LogoText = styled.span`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -2%;
`;

export const List = styled.ul`
  display: flex;
  gap: ${theme.spacing(14)};
`;

export const SigninBtn = styled.button`
  display: flex;
  gap: ${theme.spacing(4)};
  align-items: center;
  background-color: transparent;
  border: none;
  transition: color ${theme.transition};

  &:hover{
    color: ${theme.colors.accent};
  }
`;

export const LoginText = styled.span`
  font-weight: 700;
  line-height: 1.25;
`;

export const SigninSignupWrap = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(8)};
`;

export const SignupBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 39px;
  background-color: ${theme.colors.mainText};
  color: ${theme.colors.bg};
  border-radius: 12px;
  border: none;
  transition: ${theme.transition};
  &:hover {
    background-color: ${theme.colors.accent};
  }
`;

export const StyledLink = styled(NavLink)`
  transition: ${theme.transition};

  &:hover,
  &.active {
    color: ${theme.colors.accent};
  }
`;
