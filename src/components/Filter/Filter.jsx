import { Formik } from 'formik';

import { BtnReset, Label, StyledField, StyledForm } from './Filter.styled';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const initialValues = {
    language: 'all',
    level: 'all',
    price: 'all',
  };

  const [filterValues, setFilterValues] = useState(initialValues);

  useEffect(() => {
    dispatch(setFilter(filterValues));
  }, [filterValues, dispatch]);

  const handleLanguageChange = e => {
    setFilterValues(prevValues => ({
      ...prevValues,
      language: e.target.value,
    }));
  };

  const handleLevelChange = e => {
    setFilterValues(prevValues => ({
      ...prevValues,
      level: e.target.value,
    }));
  };

  const handlePriceChange = e => {
    setFilterValues(prevValues => ({
      ...prevValues,
      price: e.target.value,
    }));
  };

  const handleReset = () => {
    setFilterValues({
      language: 'all',
      level: 'all',
      price: 'all',
    });
  };

  return (
    <Formik initialValues={filterValues}>
      {() => (
        <StyledForm>
          <Label>
            Languages
            <StyledField
              className="language"
              name="language"
              as="select"
              onChange={handleLanguageChange}
              value={filterValues.language}
            >
              <option value="all">All</option>
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              <option value="German">German</option>
              <option value="Italian">Italian</option>
              <option value="Mandarin Chinese">Chinese</option>
              <option value="Vietnamese">Vietnamese</option>
            </StyledField>
          </Label>
          <Label>
            Level of knowledge
            <StyledField
              className="level"
              name="level"
              as="select"
              onChange={handleLevelChange}
              value={filterValues.level}
            >
              <option value="all">All</option>
              <option value="A1 Beginner">A1 Beginner</option>
              <option value="A2 Elementary">A2 Elementary</option>
              <option value="B1 Intermediate">B1 Intermediate</option>
              <option value="B2 Upper-Intermediate">
                B2 Upper-Intermediate
              </option>
              <option value="C1 Advanced">C1 Advanced</option>
              <option value="C2 Proficient">C2 Proficient</option>
            </StyledField>
          </Label>
          <Label>
            Price
            <StyledField
              className="price"
              name="price"
              as="select"
              onChange={handlePriceChange}
              value={filterValues.price}
            >
              <option value="all">All</option>
              <option value="25">25$</option>
              <option value="30">30$</option>
              <option value="35">35$</option>
              <option value="27">27$</option>
              <option value="32">32$</option>
              <option value="28">28$</option>
            </StyledField>
          </Label>
          <BtnReset type="button" onClick={handleReset}>
            Reset
          </BtnReset>
        </StyledForm>
      )}
    </Formik>
  );
};
