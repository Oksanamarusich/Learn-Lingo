import { IconClose } from 'components/icons/IconClose';
import {
  ButtonForm,
  ErrMsg,
  StyledButtonForm,
  StyledField,
  StyledLabel,
  TitleForm,
} from 'components/StyledForm.styled';
import { Formik } from 'formik';
import { toast } from 'react-hot-toast';
import * as yup from 'yup';
import {
  AvatarBookTrial,
  ContainerBookTrial,
  ContainerTeacher,
  DescriptionBookTrial,
  FieldRadioGroup,
  RadioGroup,
  RadioGroupLabel,
  StyledForm,
  StyledSpan,
  Subtitle,
  Text,
} from './ModalBookTrial.styled';

const FormSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('This field is required'),
  email: yup.string().email().required('This field is required'),
  number: yup.string().required('This field is required'),
});

export const ModalBookTrial = ({ onClose, teacher }) => {
  const { avatar_url, name } = teacher;

  const initialValues = {
    picked: 'Career and business',
    name: '',
    email: '',
    number: '',
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
    console.log(actions);
    toast.success(
      'The order has been sent, wait for a call from the administrator'
    );
    actions.resetForm();
  };

  return (
    <ContainerBookTrial>
      <TitleForm>Book trial lesson</TitleForm>
      <DescriptionBookTrial>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </DescriptionBookTrial>
      <ButtonForm type="button" onClick={onClose}>
        <IconClose />
      </ButtonForm>
      <ContainerTeacher>
        <div>
          <AvatarBookTrial src={avatar_url} alt="photo teacher" width="44" />
        </div>
        <div>
          <StyledSpan>Your teacher</StyledSpan>
          <Text>{name}</Text>
        </div>
      </ContainerTeacher>
      <Subtitle>What is your main reason for learning English?</Subtitle>
      <Formik
        initialValues={initialValues}
        validationSchema={FormSchema}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <div id="my-radio=group">
            <RadioGroup role="group" aria-labelledby="my-radio-group">
              <RadioGroupLabel>
                <FieldRadioGroup
                  type="radio"
                  name="picked"
                  value="Career and business"
                />
                Career and business
              </RadioGroupLabel>

              <RadioGroupLabel>
                <FieldRadioGroup
                  type="radio"
                  name="picked"
                  value="Lesson for kids"
                />
                Lesson for kids
              </RadioGroupLabel>
              <RadioGroupLabel>
                <FieldRadioGroup
                  type="radio"
                  name="picked"
                  value="Living abroad"
                />
                Living abroad
              </RadioGroupLabel>
              <RadioGroupLabel>
                <FieldRadioGroup
                  type="radio"
                  name="picked"
                  value="Exams and coursework"
                />
                Exams and coursework
              </RadioGroupLabel>
              <RadioGroupLabel>
                <FieldRadioGroup
                  type="radio"
                  name="picked"
                  value="Culture, travel or hobby"
                />
                Culture, travel or hobby
              </RadioGroupLabel>
            </RadioGroup>
          </div>

          <StyledLabel>
            <StyledField name="name" type="text" placeholder="Full Name" />
            <ErrMsg name="name" component="p" />
          </StyledLabel>
          <StyledLabel>
            <StyledField name="email" type="email" placeholder="Email" />
            <ErrMsg name="email" component="p" />
          </StyledLabel>
          <StyledLabel>
            <StyledField name="number" type="tel" placeholder="Phone number" />
            <ErrMsg name="phoneNumber" component="p" />
          </StyledLabel>

          <StyledButtonForm type="submit">Book</StyledButtonForm>
        </StyledForm>
      </Formik>
    </ContainerBookTrial>
  );
};
