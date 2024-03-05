import styled from 'styled-components';
import { theme } from 'theme';

export const CardWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${theme.spacing(24)};
  padding: ${theme.spacing(12)};
  border-radius: 24px;
  max-width: 1184px;
  margin-bottom: ${theme.spacing(16)};
`;

export const AvatarWrap = styled.div`
  position: relative;
`;
export const AvatarStatus = styled.svg`
  position: absolute;
  top: 32px;
  left: 119px;
`;

export const Avatar = styled.img`
  padding: ${theme.spacing(6)};
  max-width: 126px;
  max-height: 126px;
  border-radius: 50%;
  border: 3px solid #fbe9ba;
`;

export const CardHeading = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  p {
    display: inline-flex;
    font-weight: 500;
    line-height: 1.5;
  }
`;

export const HeadingList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing(8)};
  justify-content: center;
  align-items: center;
`;

export const LangSpan = styled.span`
  margin-bottom: ${theme.spacing(4)};
  font-weight: 500;
  line-height: 1.5;
  color: ${theme.colors.secondaryText};
`;

export const BtnHeart = styled.button`
  margin-left: ${theme.spacing(32)};
  background-color: transparent;
  border: none;
  width: 26px;
  height: 26px;

  svg {
    transition: stroke ${theme.transition};
    stroke: ${theme.colors.mainText};
  }

  &:hover svg {
    stroke: ${theme.colors.accent};
  }
`;

export const AccentText = styled.span`
  color: ${theme.colors.accentText};
`;

export const SpanSpace = styled.span`
  color: rgba(18, 20, 23, 0.2);
`;

export const MainBlock = styled.div`
  h2 {
    font-size: 24px;
    font-weight: 500;
    line-height: 1;
    margin-bottom: ${theme.spacing(16)};
  }

  p {
    font-weight: 500;
    line-height: 1.5;
    margin-bottom: ${theme.spacing(4)};

    &:last-of-type {
      margin-bottom: ${theme.spacing(8)};
    }
  }
  span {
    color: ${theme.colors.secondaryText};
  }
`;

export const Underline = styled.span`
  text-decoration: underline;
  color: ${theme.colors.mainText}!important;
`;

export const BtnMore = styled.button`
  margin-bottom: ${theme.spacing(16)};
  border: none;
  background-color: transparent;
  font-weight: 500;
  line-height: 1.5;
  font-size: 16px;
  text-decoration: underline;
  transition: color ${theme.transition};
  &:hover {
    color: ${theme.colors.accent};
  }
`;

export const BageList = styled.ul`
  display: flex;
  gap: ${theme.spacing(4)};
  flex-wrap: wrap;
`;

export const BageItem = styled.li`
  padding: 8px 12px;
  border-radius: 35px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.14;
  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.accent : 'white'};
  border: ${({ $active }) =>
    $active ? 'none' : '1px solid rgba(18, 20, 23, 0.2)'};
`;

export const ReviewerList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(16)};
  margin-top: ${theme.spacing(16)};
`;

export const ReviewerInfo = styled.div`
  display: flex;
  gap: ${theme.spacing(6)};
  margin-bottom: ${theme.spacing(8)};
  font-weight: 500;
  line-height: 24px;
  span {
    color: ${theme.colors.secondaryText};
  }
`;

export const RatingWrap = styled.div`
  display: flex;
  gap: ${theme.spacing(4)};
  font-size: 14px;
  line-height: 1.29;
`;

export const ReviewerAvatar = styled.img`
  border-radius: 50%;
  width: 44px;
  height: 44px;
`;

export const BtnBook = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 48px;
  margin-top: ${theme.spacing(16)};
  background-color: ${theme.colors.accent};
  border: none;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.56;
  transition: background-color ${theme.transition};
  &:hover {
    background-color: ${theme.colors.lightAccent};
  }
`;
