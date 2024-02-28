import styled from 'styled-components';
import { theme } from 'theme';

export const CardWrap = styled.div`
  display: flex;
  gap: ${theme.spacing(24)};
  padding: ${theme.spacing(12)};
  border-radius: 24px;
  width: 1184px;
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
  gap: 160px;

  p {
    display: inline-flex;
    font-weight: 500;
    line-height: 1.5;
  }
`;

export const HeadingList = styled.div`
  display: flex;
  gap: ${theme.spacing(8)};
  justify-content: center;
  align-items: center;
`;

export const LangSpan = styled.span`
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

  &:hover {
    color: ${theme.colors.accent};
  }
`;

export const BageList = styled.ul`
  display: flex;
  gap: ${theme.spacing(4)};
`;

export const BageItem = styled.li`
  padding: 8px 12px;
  border-radius: 35px;
  border: 1px solid rgba(18, 20, 23, 0.2);
  font-weight: 500;
  font-size: 14px;
  line-height: 1.14;
`;

export const ReviewerList = styled.ul``;

export const ReviewerItem = styled.li``;

// export const MainList = styled.ul`
//   margin-block-end: ${theme.spacing(8)};

//   display: flex;
//   flex-direction: column;
//   gap: ${theme.spacing(4)};
//   font-weight: 500;
//   line-height: 1.5;
// `;

// export const TitleSpan = styled.span`
//   color: ${theme.colors.accent};
// `;

// export const UnderlineSpan = styled.span`
//   text-decoration: underline;
// `;

// export const BtnMore = styled.button`
//   margin-block-end: ${theme.spacing(16)};
//   border: none;
//   background-color: transparent;
//   font-weight: 500;
//   text-decoration: underline;

//   &.active {
//     display: none;
//   }
// `;

// export const LevelList = styled.ul`
//   display: flex;
//   gap: ${theme.spacing(4)};

//   li {
//     padding: ${theme.spacing(4)} ${theme.spacing(6)};
//     border: 1px solid rgba(18, 20, 23, 0.2);
//     border-radius: ${theme.radii.xl};

//     color: rgb(18, 20, 23);
//     font-size: 14px;
//     font-weight: 500;
//     line-height: 1.142;

//     &:first-child {
//       background-color: ${theme.colors.primary};
//       border: 1px solid transparent;
//     }
//   }
// `;

// export const OpenData = styled.div``;

// export const HiddenData = styled.div``;

// export const FlexContainer = styled.div`
//   margin-block: ${theme.spacing(17.5)} ${theme.spacing(8)};

//   display: flex;
//   gap: ${theme.spacing(6)};
// `;

// export const RevAvatar = styled.img`
//   border-radius: 50%;
// `;

// export const FlexWrapper = styled.div`
//   gap: ${theme.spacing(1.5)};

//   h3 {
//     color: ${theme.colors.accent};
//     font-weight: 500;
//     line-height: 1.5;
//   }

//   p {
//     font-weight: 500;
//   }

//   svg {
//     margin-inline-end: ${theme.spacing(6)};
//     transform: translateY(2px);
//   }
// `;

// export const ReviewerComment = styled.p`
//   margin-block-end: ${theme.spacing(16)};

//   font-weight: 500;
//   line-height: 1.5;
// `;

// export const BtnLesson = styled.button`
//   margin-block-start: ${theme.spacing(16)};
//   padding: ${theme.spacing(8)} ${theme.spacing(24)};

//   border-radius: ${theme.radii.xs};
//   border: none;
//   background: ${theme.colors.primary};
//   font-size: 18px;
//   font-weight: 700;
//   line-height: 1.555;

//   transition: background-color ${theme.transition};

//   &:hover {
//     background-color: ${theme.colors.secondary};
//   }
// `;
