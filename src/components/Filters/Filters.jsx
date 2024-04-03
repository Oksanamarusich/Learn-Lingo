import { getDatabase, ref, child, get } from 'firebase/database';
import { Field, Formik } from 'formik';
import { changeFilter } from '../../redux/filters/filtersSlice';

import {
  ButtonSearch,
  FiltersSection,
  StyledForm,
  StyledLabel,
  StyledOption,
  StyledSelect,
} from './Filters.styled';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';

export const Filters = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const languages = data.flatMap(({ languages }) => languages);
  const uniqueLanguages = [...new Set(languages)];
  const levels = data.flatMap(({ levels }) => levels);
  const uniqueLevels = [...new Set(levels)];
  const price = data
    .map(({ price_per_hour }) => price_per_hour)
    .filter((value, index, self) => self.indexOf(value) === index)
    .sort((a, b) => a - b);

  useEffect(() => {
    const getDatabaseTeachers = async () => {
      const dbRef = ref(getDatabase());

      try {
        const snapshot = await get(child(dbRef, '/'));

        if (snapshot.exists()) {
          const data = snapshot.val();
          setData(data.teachers);
        } else {
          toast.error('No data available');
        }
      } catch (error) {
        console.error(error);
        toast.error('Error loading data');
      }
    };

    getDatabaseTeachers();
  }, []);

  return (
    <FiltersSection>
      <Formik
        initialValues={{
          languages: '',
          levels: '',
          prise_per_hour: '',
        }}
        onSubmit={(values, actions) => {
          dispatch(changeFilter(values));

          actions.resetForm();
        }}
      >
        <StyledForm>
          <StyledLabel>
            Languages
            <Field name="languages" as={StyledSelect}>
              <StyledOption>All</StyledOption>
              {uniqueLanguages.map((language, index) => (
                <StyledOption value={language} key={index}>
                  {language}
                </StyledOption>
              ))}
            </Field>
          </StyledLabel>
          <StyledLabel>
            Level of knowledge
            <Field name="levels" as={StyledSelect}>
              <option>All</option>
              {uniqueLevels.map((level, index) => (
                <StyledOption value={level} key={index}>
                  {level}
                </StyledOption>
              ))}
            </Field>
          </StyledLabel>
          <StyledLabel>
            Prise
            <Field name="prise_per_hour" as={StyledSelect}>
              <option>All</option>
              {price.map((price, index) => (
                <StyledOption value={price} key={index}>
                  {price} $
                </StyledOption>
              ))}
            </Field>
          </StyledLabel>

          <ButtonSearch type="submit">Search</ButtonSearch>
        </StyledForm>
      </Formik>
    </FiltersSection>
  );
};
