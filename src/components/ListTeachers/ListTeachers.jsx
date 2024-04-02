import { TeacherCard } from 'components/TeacherCard/TeacherCard';
import { WrapperListTeachers } from './ListTeachers.styled';

export const ListTeachers = ({ data, filters }) => {
  return (
    <WrapperListTeachers>
      {data.map((item, index) => (
        <TeacherCard key={index} index={index} teacher={item} filters={filters} />
      ))}
    </WrapperListTeachers>
  );
};
