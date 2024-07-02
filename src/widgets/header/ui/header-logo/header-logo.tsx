import { AppRoute } from '@shared/const';
import { Link } from 'react-router-dom';

export function HeaderLogo(): JSX.Element {
  return (
    <Link className="header__logo-link" to={AppRoute.Main}>
      <img
        className="header__logo"
        src="img/logo.svg"
        alt="6 cities logo"
        width="81"
        height="41"
      />
    </Link>
  );
}
