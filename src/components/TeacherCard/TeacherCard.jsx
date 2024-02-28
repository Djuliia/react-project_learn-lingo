import sprite from '../../images/sprite.svg';
import { useState } from 'react';
import { PopUp } from 'components/Modal/Modal';
import { BookTeacher } from 'components/BookTeacher/BookTeacher';
import {
  AccentText,
  Avatar,
  AvatarStatus,
  AvatarWrap,
  BageItem,
  BageList,
  BtnHeart,
  BtnMore,
  CardHeading,
  CardWrap,
  HeadingList,
  LangSpan,
  MainBlock,
  ReviewerList,
  SpanSpace,
  Underline,
} from './TeacherCard.styled';

export const TeacherCard = ({ card }) => {
  const [bookTeacherModalisOpen, setBookTeacherModalisOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isOpenForRead, setIsOpenForRead] = useState(false);
  const [isReadMoreClicked, setIsReadMoreClicked] = useState(false);

  const openBookTeacherModal = () => {
    setBookTeacherModalisOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const closeBookTeacherModal = () => {
    setBookTeacherModalisOpen(false);
    document.body.style.overflow = 'auto';
  };

  const toggleFavorite = () => {
    isFavorite ? setIsFavorite(false) : setIsFavorite(true);
  };

  const handleReadMore = () => {
    setIsOpenForRead(true);
    setIsReadMoreClicked(true);
  };

  const {
    surname,
    rating,
    price_per_hour,
    name,
    levels,
    lessons_done,
    lesson_info,
    languages,
    experience,
    conditions,
    avatar_url,
    reviews,
  } = card;

  return (
    <CardWrap>
      <AvatarWrap>
        <AvatarStatus width={8} height={8}>
          <use href={`${sprite}#ellipse`} />
        </AvatarStatus>
        <Avatar src={avatar_url} alt="avatar" />
      </AvatarWrap>
      <div>
        <CardHeading>
          <LangSpan>Languages</LangSpan>
          <HeadingList>
            <svg width="16" height="16">
              <use href={`${sprite}#book-open`} />
            </svg>
            <p>Lessons online</p>
            <SpanSpace>|</SpanSpace> <p>Lessons done: {lessons_done} </p>{' '}
            <SpanSpace>| </SpanSpace>
            <svg width="16" height="16">
              <use href={`${sprite}#star`} />
            </svg>
            <p>Rating: {rating} </p>
            <SpanSpace>|</SpanSpace>
            <p>
              Price / 1 hour:&nbsp; <AccentText>{price_per_hour}</AccentText>
            </p>
            <BtnHeart onClick={toggleFavorite}>
              {isFavorite ? (
                <svg width={26} height={26}>
                  <use href={`${sprite}#fullheart`} />
                </svg>
              ) : (
                <svg width={26} height={26}>
                  <use href={`${sprite}#heart`} />
                </svg>
              )}
            </BtnHeart>
          </HeadingList>
        </CardHeading>
        <MainBlock>
          <h2>
            {name} {surname}
          </h2>
          <p>
            <span>Speaks: </span>
            <Underline> {languages.join(', ')}</Underline>
          </p>
          <p>
            <span>Lesson Info: </span>
            {lesson_info}
          </p>
          <p>
            <span>Conditions: </span> {conditions}
          </p>

          {!isReadMoreClicked && (
            <>
              <BtnMore onClick={handleReadMore}>Read more</BtnMore>
              <BageList>
                {levels.map(level => (
                  <BageItem key={level}>{level}</BageItem>
                ))}
              </BageList>
            </>
          )}

          {isOpenForRead && (
            <div>
              <p>{experience}</p>
              <ReviewerList>
                {reviews.map(
                  (
                    {
                      comment,
                      reviewer_avatar,
                      reviewer_name,
                      reviewer_rating,
                    },
                    index
                  ) => (
                    <li key={index}>
                      <img src={reviewer_avatar} alt="avatar" />
                      <p> {reviewer_name}</p>
                      <svg>
                        <use href={`${sprite}#star`} width="16" height="16" />
                      </svg>
                      {reviewer_rating}
                      <p>{comment}</p>
                    </li>
                  )
                )}
              </ReviewerList>
              <BageList>
                {levels.map(level => (
                  <BageItem key={level}>{level}</BageItem>
                ))}
              </BageList>
              <button onClick={openBookTeacherModal}>Book trial lesson</button>
              <PopUp
                isOpen={bookTeacherModalisOpen}
                onRequestClose={closeBookTeacherModal}
              >
                <BookTeacher />
              </PopUp>
            </div>
          )}
        </MainBlock>
      </div>
    </CardWrap>
  );
};
