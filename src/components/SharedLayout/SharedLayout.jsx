import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom/dist';
import { Container } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
