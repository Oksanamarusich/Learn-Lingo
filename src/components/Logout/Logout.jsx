import { getAuth, deleteUser } from "firebase/auth";
import { ButtonRegistration } from 'components/UserMenu/UserMenu.styled';

import { useDispatch } from 'react-redux';
import { removeUser } from '../../redux/auth/authSlice';
import { toast } from "react-hot-toast";

export const LogOut = () => {
  const dispatch = useDispatch();
  

  const handleClick = () => {
const auth = getAuth();
    const user = auth.currentUser;
    deleteUser(user)
      .then((user)=> {
  dispatch(removeUser({email: null,
            id: null,
            token: null,}))
        toast.success('Logout successful')
      }
        
    )
    .catch(error => {
      toast.error('Sorry, an error occurred. Please try again')
      });
    
  };
  return (
    <>
      <ButtonRegistration onClick={handleClick}>Logout</ButtonRegistration>{' '}
    </>
  );
};
