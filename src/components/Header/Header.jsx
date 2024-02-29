import sprite from '../../images/sprite.svg';
import {
  List,
  SigninSignupWrap,
  SigninBtn,
  LogoText,
  LogoLink,
  Nav,
  StyledHeader,
  SignupBtn,
  StyledLink,
} from './Header.styled';
import { useState } from 'react';
import { PopUp } from 'components/Modal/Modal';
import { SigninForm } from 'components/Auth/SigninForm';
import { SignupForm } from 'components/Auth/SignupForm';

export const Header = () => {
  const [signinModalIsOpen, setSigninModalIsOpen] = useState(false);
  const [signupModalIsOpen, setSignupModalIsOpen] = useState(false);

  const openSigninModal = () => {
    setSigninModalIsOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const closeSigninModal = () => {
    setSigninModalIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const openSignupModal = () => {
    setSignupModalIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeSignupModal = () => {
    setSignupModalIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <StyledHeader>
      <Nav>
        <LogoLink to="/">
          <svg width="28" height="28">
            <use href={`${sprite}#logo`} />
          </svg>
          <LogoText>LearnLingo</LogoText>
        </LogoLink>
        <List>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/teachers">Teachers</StyledLink>
          </li>
          <li>
            <StyledLink to="/favorites">Favorites</StyledLink>
          </li>
        </List>

        <SigninSignupWrap>
          <SigninBtn type="button" onClick={openSigninModal}>
            <svg width="20" height="20">
              <use href={`${sprite}#log-in`} />
            </svg>
            Log in
          </SigninBtn>
          <SignupBtn type="button" onClick={openSignupModal}>
            Registration
          </SignupBtn>

          <PopUp isOpen={signinModalIsOpen} onRequestClose={closeSigninModal}>
            <SigninForm closeModal={closeSigninModal} />
          </PopUp>

          <PopUp isOpen={signupModalIsOpen} onRequestClose={closeSignupModal}>
            <SignupForm closeModal={closeSigninModal} />
          </PopUp>
        </SigninSignupWrap>
      </Nav>
    </StyledHeader>
  );
};
