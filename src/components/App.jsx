import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { Layout } from './Layout/Layout';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../redux/auth/authSlice';

const Home = lazy(() => import('../pages/Home/Home'));
const Teachers = lazy(() => import('../pages/Teachers/Teachers'));

export const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, user => {
      console.log(user);
      if (user) {
        dispatch(
          refreshUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
      } else {
        return;
      }
    });
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/teachers" element={<Teachers />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
