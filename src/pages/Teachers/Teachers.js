import { getDatabase, ref, child, get, limitToFirst} from 'firebase/database';
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

  const dispatch = useDispatch();
  
  const getDatabaseTeachers = () => {
    setIsLoading(true);
    const dbRef = ref(getDatabase());
    get(child(dbRef, '/'), limitToFirst(3))
      .then(snapshot => {
        setIsLoading(false);
        if (snapshot.exists()) {
          const teachers = snapshot.val();
          // console.log(teachers)
          // const one = typeof(teachers)
          // console.log(one)
          // const cardsTeachers = teachers.teachers.slice(0, 3);
          // console.log(cardsTeachers)
          // console.log(typeof(cardsTeachers))
          
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
    
  };

  useEffect(() => {
    getDatabaseTeachers();
  }, []);

  return (
    <StyledMain>
      {/* <Filters /> */}
      {isLoading ? <Loader /> : <ListTeachers data={dataTeachers} />}
     {!dataTeachers  && <ButtonLoadMore onClick = {handleLoadMore} />} 
    </StyledMain>
  );
}
