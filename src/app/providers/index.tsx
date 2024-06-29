import { Main } from '@pages/main/ui';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from '@pages/login/ui';
import { Favorites } from '@pages/favorites/ui';
import { Offer } from '@pages/offer/ui';
import { AppRoute } from '@shared/const';

/*
В будущем лучше вынести обертки из компонентов.
Подумать над названием offer-card в entities
Убрать временные переменные из offer-details, offer-price и offer-rating
не забыть про const в cities-selector
Умер сервер, убрать пока запросы через Axios, подумать как избежать дублирования кода при генерации моков, если это возможно и если это имеет смысл?
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
