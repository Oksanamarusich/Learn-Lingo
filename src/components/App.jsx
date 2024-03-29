import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { Layout } from './Layout/Layout';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../redux/auth/authSlice';
import { PrivateRoute } from './PrivateRoute';


const Home = lazy(() => import('../pages/Home/Home'));
const Teachers = lazy(() => import('../pages/Teachers/Teachers'));
const Favorites = lazy(() => import('../pages/Favorites/Favorites'));

export const App = () => {
  const dispatch = useDispatch();
  
  
  useEffect(() => {
    const auth = getAuth();
    
    onAuthStateChanged(auth, user => {
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
        <Route path="/teachers" element={<Teachers />}/>
        <Route path="favorites" element={
          <PrivateRoute component={<Favorites />} />}
        />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
};
