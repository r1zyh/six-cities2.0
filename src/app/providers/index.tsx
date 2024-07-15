import { Main } from '@pages/main/ui';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from '@pages/login/ui';
import { Favorites } from '@pages/favorites/ui';
import { Offer } from '@pages/offer/ui';
import { AppRoute } from '@shared/const';

/*
Подумать над названием offer-card в entities
не забыть про const в cities-selector
Подключить Map
На страничке favorites отрисовать массив favorites, реализовать логику добавления в favorites
Так же добавить моки для favorites,
*/

function Providers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main />}></Route>
        <Route path={AppRoute.Login} element={<Login />}></Route>
        <Route path={AppRoute.Favorites} element={<Favorites />}></Route>
        <Route path={`${AppRoute.Offer}/:id`} element={<Offer />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Providers;
