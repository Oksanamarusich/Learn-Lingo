import { TeacherCard } from 'components/TeacherCard/TeacherCard';
import { WrapperListTeachers } from './ListTeachers.styled';

export const ListTeachers = ({ data }) => {
  return (
    <WrapperListTeachers>
      {data.map((item, index) => (
        <TeacherCard key={index} index={index} teacher={item} />
      ))}
    </WrapperListTeachers>
  );
};
