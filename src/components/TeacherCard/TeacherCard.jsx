import sprite from '../../images/sprite.svg#book-open';
import teacherAvatar from '../../images/jane.png';
import reviewerAvatar from '../../images/frank.png';
import { useEffect, useState } from 'react';
import { PopUp } from 'components/Modal/Modal';
import { BookTeacher } from 'components/BookTeacher/BookTeacher';

export const TeacherCard = () => {
  const [bookTeacherModalisOpen, setBookTeacherModalisOpen] = useState(false);

  const openBookTeacherModal = () => {
    setBookTeacherModalisOpen(true);
  };
  const closeBookTeacherModal = () => {
    setBookTeacherModalisOpen(false);
  };

  useEffect(() => {
    if (bookTeacherModalisOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [bookTeacherModalisOpen]);
  return (
    <li>
      <svg width={26} height={26}>
        <use href="../../images/sprite.svg#normalheart" />
      </svg>
      <img src={teacherAvatar} alt="avatar" />
      <div>
        <p>Languages</p>
        <h2>Jane Smith</h2>
      </div>
      <ul>
        <li>
          <svg width="16" height="16">
            <use href={`${sprite}#book-open`} />
          </svg>
          Lessons online
          <li>Lessons done: 1098</li>
        </li>
        <li>
          <svg>
            <use href={`${sprite}#star`} width="16" height="16" />
          </svg>
          Rating: 4.8
        </li>
        <li>
          Price / 1 hour: <span>30$</span>
        </li>
      </ul>
      <p>
        <span>Speaks: </span>German, French
      </p>
      <p>
        <span>Lesson Info: </span>Lessons are structured to cover grammar,
        vocabulary, and practical usage of the language.
      </p>
      <p>
        <span>Conditions: </span> Welcomes both adult learners and teenagers (13
        years and above). Provides personalized study plans
      </p>
      <p>
        Jane is an experienced and dedicated language teacher specializing in
        German and French. She holds a Bachelor's degree in German Studies and a
        Master's degree in French Literature. Her passion for languages and
        teaching has driven her to become a highly proficient and knowledgeable
        instructor. With over 10 years of teaching experience, Jane has helped
        numerous students of various backgrounds and proficiency levels achieve
        their language learning goals. She is skilled at adapting her teaching
        methods to suit the needs and learning styles of her students, ensuring
        that they feel supported and motivated throughout their language
        journey.
      </p>
      <ul>
        <li>
          <img src={reviewerAvatar} alt="avatar"></img>
          <p>Frank</p>
          <svg>
            <use href={`${sprite}#star`} width="16" height="16" />
          </svg>
          4.0
          <p>Jane's lessons were very helpful. I made good progress. </p>
        </li>
      </ul>
      <ul>
        <li>A1 Beginner</li>
        <li>#A2 Elementary</li>
        <li>#B1 Intermediate</li>
        <li>#B2 Upper-Intermediate</li>
      </ul>
      <button onClick={openBookTeacherModal}>Book trial lesson</button>

      <PopUp
        isOpen={bookTeacherModalisOpen}
        onRequestClose={closeBookTeacherModal}
      >
        <BookTeacher />
      </PopUp>
      <button>Read more</button>
      <p>
        Jane is an experienced and dedicated language teacher specializing in
        German and French. She holds a Bachelor's degree in German Studies and a
        Master's degree in French Literature. Her passion for languages and
        teaching has driven her to become a highly proficient and knowledgeable
        instructor. With over 10 years of teaching experience, Jane has helped
        numerous students of various backgrounds and proficiency levels achieve
        their language learning goals. She is skilled at adapting her teaching
        methods to suit the needs and learning styles of her students, ensuring
        that they feel supported and motivated throughout their language
        journey.
      </p>
      <p>
        Jane is an experienced and dedicated language teacher specializing in
        German and French. She holds a Bachelor's degree in German Studies and a
        Master's degree in French Literature. Her passion for languages and
        teaching has driven her to become a highly proficient and knowledgeable
        instructor. With over 10 years of teaching experience, Jane has helped
        numerous students of various backgrounds and proficiency levels achieve
        their language learning goals. She is skilled at adapting her teaching
        methods to suit the needs and learning styles of her students, ensuring
        that they feel supported and motivated throughout their language
        journey.
      </p>
    </li>
  );
};
