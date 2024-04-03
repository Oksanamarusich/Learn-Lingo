import { getDatabase, ref, child, get, limitToFirst } from 'firebase/database';
import { useEffect, useState } from 'react';
import { ButtonLoadMore } from 'components/ButtonLoadMore/ButtonLoadMore';
import { ListTeachers } from 'components/ListTeachers/ListTeachers';
import { StyledMain, StyledSection } from './Teachers.styled';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { getTeachers } from '../../redux/teachers/teachersSlice';
import {
  selectFilters,
  selectVisibleTeachers,
} from '../../redux/teachers/selectors';
import { Loader } from 'components/Loader/Loader';
import { Filters } from 'components/Filters/Filters';

export default function Teachers() {
  const dataTeachers = useSelector(selectVisibleTeachers);
  const filters = useSelector(selectFilters);

  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const dispatch = useDispatch();

  const handleLoadMore = () => {
    setCurrentPage(prevState => prevState + 1);
  };

  useEffect(() => {
    if (!filters) {
      const getDatabaseTeachers = async () => {
        setIsLoading(true);

        const dbRef = ref(getDatabase());
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        try {
          const snapshot = await get(child(dbRef, '/'), limitToFirst(endIndex));

          setIsLoading(false);
          if (snapshot.exists()) {
            const data = snapshot.val();
            const teachers = Object.values(data.teachers).slice(
              startIndex,
              endIndex
            );

            dispatch(getTeachers(teachers));
          } else {
            toast.error('No data available');
          }
        } catch (error) {
          console.error(error);
          toast.error('Error loading data');
        }
      };

      getDatabaseTeachers();
    }
  }, [currentPage, dispatch, filters]);

  useEffect(() => {
    if (!filters) {
      return;
    } else {
      const getDatabaseTeachers = async () => {
        const dbRef = ref(getDatabase());

        try {
          const snapshot = await get(child(dbRef, '/'));

          if (snapshot.exists()) {
            const data = snapshot.val();
            dispatch(getTeachers(data.teachers));
          } else {
            toast.error('No data available');
          }
        } catch (error) {
          console.error(error);
          toast.error('Error loading data');
        }
      };

      getDatabaseTeachers();
    }
  }, [filters, dispatch]);

  return (
    <StyledMain>
      {!isLoading && <Filters />}
      <StyledSection>
        {isLoading ? <Loader /> : <ListTeachers data={dataTeachers} />}
        {!isLoading &&
          dataTeachers.length <= 29 &&
          dataTeachers.length >= 4 && (
            <ButtonLoadMore handleLoadMore={handleLoadMore} />
          )}
      </StyledSection>
    </StyledMain>
  );
}
