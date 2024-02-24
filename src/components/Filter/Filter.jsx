import { Field, Form, Formik } from 'formik';
import { useQueryParams } from 'hooks/useQueryParams';

export const Filter = () => {
  const { language, changeLanguage, level, changeLevel, price, changePrice } =
    useQueryParams();

  return (
    <Formik
      initialValues={{
        language,
        level,
        price,
      }}
    >
      {() => (
        <Form>
          <label>
            Languages
            <Field
              name="language"
              as="select"
              value={language}
              onChange={e => changeLanguage(e.target.value)}
            >
              <option value="all">All</option>
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
              <option value="german">German</option>
              <option value="italian">Italian</option>
              <option value="korean">Korean</option>
            </Field>
          </label>
          <label>
            Level of knowledge
            <Field
              name="level"
              as="select"
              value={level}
              onChange={e => changeLevel(e.target.value)}
            >
              <option value="all">All</option>
              <option value="beginner">A1 Beginner</option>
              <option value="elementary">A2 Elementary</option>
              <option value="intermediate">B1 Intermediate</option>
              <option value="upper-intermediate">B2 Upper-Intermediate</option>
              <option value="advanced">C1 Advanced</option>
              <option value="proficient">C2 Proficient</option>
            </Field>
          </label>
          <label>
            Price
            <Field
              name="price"
              as="select"
              value={price}
              onChange={e => changePrice(e.target.value)}
            >
              <option value="all">All</option>
              <option value="25">25$</option>
              <option value="30">30$</option>
              <option value="35">35$</option>
              <option value="27">27$</option>
              <option value="32">32$</option>
              <option value="28">28$</option>
            </Field>
          </label>
        </Form>
      )}
    </Formik>
  );
};
