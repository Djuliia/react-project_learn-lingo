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
import { SigninForm } from 'components/SinginForm/SigninForm';
import { SignupForm } from 'components/SignupForm/SignupForm';

export const Header = () => {
  const [signinModalIsOpen, setSigninModalIsOpen] = useState(false);
  const openSigninModal = () => setSigninModalIsOpen(true);
  const closeSigninModal = () => setSigninModalIsOpen(false);

  const [signupModalIsOpen, setSignupModalIsOpen] = useState(false);
  const openSignupModal = () => setSignupModalIsOpen(true);
  const closeSignupModal = () => setSignupModalIsOpen(false);

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
        </List>

        <SigninSignupWrap>
          <SigninBtn type="button" onClick={openSigninModal}>
            <svg width="20" height="20">
              <use href={`${sprite}#log-in`} />
            </svg>
            Log in
          </SigninBtn>
          <SignupBtn
            type="button"
            isOpen={signupModalIsOpen}
            onRequestClose={closeSignupModal}
            onClick={openSignupModal}
          >
            Registration
          </SignupBtn>

          <PopUp isOpen={signinModalIsOpen} onRequestClose={closeSigninModal}>
            <SigninForm />
          </PopUp>

          <PopUp isOpen={signupModalIsOpen} onRequestClose={closeSignupModal}>
            <SignupForm />
          </PopUp>
        </SigninSignupWrap>
      </Nav>
    </StyledHeader>
  );
};
