import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { AppBar } from 'components/AppBar/AppBar';
import { Container } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <AppBar/>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
