import { Main } from '@pages/main/ui';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from '@pages/login/ui';
import { Favorites } from '@pages/favorites/ui';
import { Offer } from '@pages/offer/ui';
import { AppRoute } from '@shared/const';

/*
Подумать над названием offer-card в entities
не забыть про const в cities-selector
Подумать как избежать дублирования кода при генерации моков, если это возможно и если это имеет смысл?
Добавить переход на конкретную карточку товара при помощи useParams и setActiveId
Подключить Map
Перенести папку типов mock в пампу types
Исправить сброс состояния при обновлении страницы Offer, скорее всего useEffect
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
