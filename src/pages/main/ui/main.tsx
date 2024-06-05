import { Header } from '../../../widgets/header/ui';
import { Cities } from '../../../widgets/cities/ui';
import { CitiesSelector } from '../../../features/cities-selector/ui';

/*
Подумать над тем, правильно-ли были отнесены текущие части Main к widgets и features
Возможно стоит вынести группирующие элементы в widgets
*/

export default function Main(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesSelector/>
        <Cities />
      </main>
    </div>
  );
}