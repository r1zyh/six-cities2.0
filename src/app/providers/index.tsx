import { Main } from '../../pages/main/ui';
import { Offer } from '../../pages/offer/ui';
import { Login } from '../../pages/login/ui';
import { Favorites } from '../../pages/favorites/ui';

/* Стоит сравнить повторяющиеся элементы из карточек offer, а так же другие вынести в shared,
а для более больших компонентов с кучей классов лучше использовать условный рендеринг
Исправить опечатку в названии папки favorites.
*/

function Providers() {
  return <Main />;
}

export default Providers;
