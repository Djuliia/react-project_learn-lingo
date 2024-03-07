import { theme } from 'theme';
import { Link, NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const StyledHeader = styled.header`
  padding: 20px;
  @media screen and(min-width: 768px) {
    width: 1056px;
    padding: 20px 64px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and(min-width: 768px) {
  }
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
  justify-content: center;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const SigninBtn = styled.button`
  display: flex;
  gap: ${theme.spacing(4)};
  align-items: center;
  background-color: transparent;
  border: none;
  font-weight: 700;
  line-height: 1.25;
  transition: color ${theme.transition};

  &:hover {
    color: ${theme.colors.accent};
    svg {
      fill: ${theme.colors.accent};
    }
  }

  svg {
    transition: fill ${theme.transition};
  }
`;

export const UserEmail = styled.span`
  color: ${theme.colors.accentText};
`;

export const UserWrap = styled.div`
  display: flex;
  gap: ${theme.spacing(4)};
  @media screen and (max-width: 767px) {
    margin-bottom: ${theme.spacing(14)};
  }
`;

export const RightWrap = styled.div`
  display: flex;
  gap: ${theme.spacing(8)};
  @media screen and (max-width: 767px) {
    display: none;
  }
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

export const BurgerMenuBtn = styled.button`
  display: block;
  cursor: pointer;
  border: none;
  background-color: transparent;

  svg {
    stroke: ${theme.colors.mainText};
    transition: ${theme.transition};
    &:hover {
      stroke: ${theme.colors.accent};
      fill: ${theme.colors.accent};
    }
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const BurgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(14)};
  align-items: center;
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;

  ${props =>
    props.isOpen &&
    css`
      animation: slideIn 0.3s ease forwards;
    `};

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const BurgerMenuList = styled.ul`
  display: flex;
  gap: ${theme.spacing(14)};
`;
