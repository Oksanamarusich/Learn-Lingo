import { getDatabase, ref, child, get } from 'firebase/database';
import { useEffect } from 'react';
import { ButtonLoadMore } from 'components/ButtonLoadMore/ButtonLoadMore';
import { Filters } from 'components/Filters/Filters';
import { ListTeachers } from 'components/ListTeachers/ListTeachers';
import { StyledMain } from './Teachers.styled';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { getTeachers } from '../../redux/teachers/teachersSlice';
import { selectTeachers } from '../../redux/teachers/selectors';

export default function Teachers() {
  const dataTeachers = useSelector(selectTeachers);

  const dispatch = useDispatch();

  const getDatabaseTeachers = () => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, '/'))
      .then(snapshot => {
        if (snapshot.exists()) {
          const teachers = snapshot.val();
          dispatch(getTeachers(teachers));
        } else {
          toast.error('No data available');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    getDatabaseTeachers();
  }, []);

  return (
    <StyledMain>
      <Filters />
      <ListTeachers data={dataTeachers} />
      <ButtonLoadMore />
    </StyledMain>
  );
}
