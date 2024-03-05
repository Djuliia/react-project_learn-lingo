import image from '../../images/comp.jpg';
import {
  Button,
  Section,
  Text,
  Title,
  BoxWrapper,
  Wrapper,
  List,
  Fill,
  Item,
  Number,
  Span,
  ImgWrap,
} from './Home.styled';

export const Home = () => {
  return (
    <Section>
      <Wrapper>
        <BoxWrapper>
          <Title>
            Unlock your potential with the best <Fill>language</Fill> tutors
          </Title>
          <Text>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </Text>
          <Button to="/teachers">Get started</Button>
        </BoxWrapper>
        <ImgWrap>
          <img src={image} alt="teacher" />
        </ImgWrap>
      </Wrapper>
      <List>
        <Item>
          <Number>32,000 +</Number>
          <Span>Experienced tutors</Span>
        </Item>
        <Item>
          <Number>300,000 +</Number>
          <Span>5-star tutor reviews</Span>
        </Item>
        <Item>
          <Number>120 +</Number>
          <Span>Subjects taught</Span>
        </Item>
        <Item>
          <Number>200 +</Number>
          <Span>Tutor nationalities</Span>
        </Item>
      </List>
    </Section>
  );
};
