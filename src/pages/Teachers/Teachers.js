import {
  getDatabase,
  ref,
  child,
  get,
  limitToFirst,
  orderByKey,
} from 'firebase/database';
import { useEffect, useState } from 'react';
import { ButtonLoadMore } from 'components/ButtonLoadMore/ButtonLoadMore';
// import { Filters } from 'components/Filters/Filters';
import { ListTeachers } from 'components/ListTeachers/ListTeachers';
import { StyledMain } from './Teachers.styled';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { getTeachers } from '../../redux/teachers/teachersSlice';
import { selectTeachers } from '../../redux/teachers/selectors';
import { Loader } from 'components/Loader/Loader';

export default function Teachers() {
  const dataTeachers = useSelector(selectTeachers);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const dispatch = useDispatch();

  const getDatabaseTeachers = () => {
    setIsLoading(true);

    const dbRef = ref(getDatabase());
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    get(child(dbRef, '/'), limitToFirst(endIndex))
      .then(snapshot => {
        setIsLoading(false);
        if (snapshot.exists()) {
          const data = snapshot.val();
          const teachers = Object.values(data.teachers).slice(
            startIndex,
            endIndex
          );
          console.log(teachers)

          dispatch(getTeachers(teachers));
        } else {
          toast.error('No data available');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleLoadMore = () => {
    setCurrentPage((prevState) => prevState + 1);
  };

  useEffect(() => {
    getDatabaseTeachers();
  }, [currentPage]);

  return (
    <StyledMain>
      {/* <Filters /> */}
      {isLoading ? <Loader /> : <ListTeachers data={dataTeachers} />}
      { !isLoading && <ButtonLoadMore handleLoadMore={handleLoadMore} />}
    </StyledMain>
  );
}
