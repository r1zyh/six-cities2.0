import { Main } from '../../pages/main/ui';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from './const/const';
import { Login } from '../../pages/login/ui';
import { Favorites } from '../../pages/favorites/ui';
import { Offer } from '../../pages/offer/ui';

/*
В будущем лучше вынести обертки из компонентов.
Подумать над названием offer-card в entities
Добавить алиасы для импортов
Стоит вынести location в favorite и login в shared, возможно и из других компонентов где есть location
BookmarksBtn стоит переделать на условный рендериг как с price и rating т.к в будущем будет использоваться classnames для определения класса isFavorite
*/

function Providers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main />}></Route>
        <Route path={AppRoute.Login} element={<Login />}></Route>
        <Route path={AppRoute.Favorites} element={<Favorites />}></Route>
        <Route path={AppRoute.Offer} element={<Offer />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Providers;
