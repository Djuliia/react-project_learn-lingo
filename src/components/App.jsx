import { Route, Routes } from 'react-router-dom/dist';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { lazy } from 'react';
import { GlobalStyle } from './GlobalStyle';

const HomePage = lazy(() => import('../pages/HomePage'));
const FavoritesPage = lazy(() => import('../pages/FavoritesPage'));
const TeachersPage = lazy(() => import('../pages/TeachersPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
