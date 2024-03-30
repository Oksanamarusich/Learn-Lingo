import { Formik } from 'formik';
import { useSelector } from 'react-redux';
import { selectTeachers } from '../../redux/teachers/selectors';
import {
  FiltersSection,
  StyledFieldLanguages,
  StyledFieldLevel,
  StyledFieldPrise,
  StyledForm,
  StyledLabel,

} from './Filters.styled';

export const Filters = () => {
    const teachers = useSelector(selectTeachers);
    console.log(teachers)
  return (
    <FiltersSection>
      <Formik>
        <StyledForm>
          <StyledLabel>
            Languages
            <StyledFieldLanguages name="languages" as="select">
              <option value="">French</option>
            </StyledFieldLanguages>
          </StyledLabel>
          <StyledLabel>
            Level of knowledge
            <StyledFieldLevel name="level" as="select">
              <option value="">A1 Beginner</option>
            </StyledFieldLevel>
          </StyledLabel>
          <StyledLabel>
            Prise
            <StyledFieldPrise name="prise" as="select">
              <option value="">30$</option>
            </StyledFieldPrise>
          </StyledLabel>
        </StyledForm>
      </Formik>
    </FiltersSection>
  );
};
