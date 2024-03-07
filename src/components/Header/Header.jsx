import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useEffect, useState } from 'react';
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
  UserEmail,
  UserWrap,
  RightWrap,
  BurgerMenuBtn,
  BurgerMenu,
  BurgerMenuList,
} from './Header.styled';
import { PopUp } from 'components/Modal/Modal';
import { SigninForm } from 'components/Auth/SigninForm';
import { SignupForm } from 'components/Auth/SignupForm';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, selectUserEmail } from '../../redux/selectors';
import { clearAuthenticated, setAuthenticated } from '../../redux/authSlice';
import toast from 'react-hot-toast';

export const Header = () => {
  const [signinModalIsOpen, setSigninModalIsOpen] = useState(false);
  const [signupModalIsOpen, setSignupModalIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const authUser = useSelector(selectUser);
  const userEmail = useSelector(selectUserEmail);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, user => {
      user
        ? dispatch(setAuthenticated(user.email))
        : dispatch(clearAuthenticated());
    });
    return () => listen();
  }, [dispatch]);

  const userSignOut = () => {
    signOut(auth)
      .then(() => toast.success('Good bye!'))
      .catch(error => toast.error(`Something went wrong! ${error}`));
  };

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

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
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
          {authUser && (
            <li>
              <StyledLink to="/favorites">Favorites</StyledLink>
            </li>
          )}
        </List>
        <RightWrap>
          {authUser ? (
            <UserWrap>
              <svg width={16} height={16}>
                <use xlinkHref={`${sprite}#user`} />
              </svg>
              <UserEmail>{userEmail}</UserEmail>
            </UserWrap>
          ) : (
            <SigninSignupWrap>
              <SigninBtn type="button" onClick={openSigninModal}>
                <svg width={20} height={20}>
                  <use href={`${sprite}#log-in`} />
                </svg>
                Log in
              </SigninBtn>
              <SignupBtn type="button" onClick={openSignupModal}>
                Registration
              </SignupBtn>

              <PopUp
                isOpen={signinModalIsOpen}
                onRequestClose={closeSigninModal}
              >
                <SigninForm closeModal={closeSigninModal} />
              </PopUp>

              <PopUp
                isOpen={signupModalIsOpen}
                onRequestClose={closeSignupModal}
              >
                <SignupForm closeModal={closeSigninModal} />
              </PopUp>
            </SigninSignupWrap>
          )}
          {authUser && (
            <SigninBtn onClick={userSignOut}>
              <svg width={20} height={20}>
                <use xlinkHref={`${sprite}#log-out`} />
              </svg>
              Log out
            </SigninBtn>
          )}
        </RightWrap>

        <BurgerMenuBtn onClick={toggleMenu}>
          <svg width="16" height="16">
            {isMenuOpen ? (
              <use href={`${sprite}#x`} />
            ) : (
              <use href={`${sprite}#menu`} />
            )}
          </svg>
        </BurgerMenuBtn>

        {isMenuOpen ? (
          <>
            <BurgerMenu>
              <BurgerMenuList>
                <li>
                  <StyledLink to="/">Home</StyledLink>
                </li>
                <li>
                  <StyledLink to="/teachers">Teachers</StyledLink>
                </li>
                {authUser && (
                  <li>
                    <StyledLink to="/favorites">Favorites</StyledLink>
                  </li>
                )}
              </BurgerMenuList>
              <div>
                {authUser ? (
                  <UserWrap>
                    <svg width={16} height={16}>
                      <use xlinkHref={`${sprite}#user`} />
                    </svg>
                    <UserEmail>{userEmail}</UserEmail>
                  </UserWrap>
                ) : (
                  <SigninSignupWrap>
                    <SigninBtn type="button" onClick={openSigninModal}>
                      <svg width={20} height={20}>
                        <use href={`${sprite}#log-in`} />
                      </svg>
                      Log in
                    </SigninBtn>
                    <SignupBtn type="button" onClick={openSignupModal}>
                      Registration
                    </SignupBtn>

                    <PopUp
                      isOpen={signinModalIsOpen}
                      onRequestClose={closeSigninModal}
                    >
                      <SigninForm closeModal={closeSigninModal} />
                    </PopUp>

                    <PopUp
                      isOpen={signupModalIsOpen}
                      onRequestClose={closeSignupModal}
                    >
                      <SignupForm closeModal={closeSigninModal} />
                    </PopUp>
                  </SigninSignupWrap>
                )}
                {authUser && (
                  <SigninBtn onClick={userSignOut}>
                    <svg width={20} height={20}>
                      <use xlinkHref={`${sprite}#log-out`} />
                    </svg>
                    Log out
                  </SigninBtn>
                )}
              </div>
            </BurgerMenu>
          </>
        ) : null}
      </Nav>
    </StyledHeader>
  );
};
