import { AppRoute, AuthorizationStatus } from '@shared/const';
import { useAppSelector } from '@shared/lib/hooks/useSelector/useSelector';
import { redirectToRoute } from '@shared/store/actions/actions';
import { getFavoriteOffersCount } from '@shared/store/offer-process';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function UserLoggedCheck(): JSX.Element {
  const favoriteCount = useAppSelector(getFavoriteOffersCount);
  const [authStatus, setAuthStatus] = useState(AuthorizationStatus.Auth);

  const logOutAction = () => {
    setAuthStatus(AuthorizationStatus.NoAuth);
    redirectToRoute(AppRoute.Login);
  };
  return authStatus === AuthorizationStatus.Auth ? (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link
            className="header__nav-link header__nav-link--profile"
            to={AppRoute.Favorites}
          >
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            <span className="header__user-name user__name">
              Oliver.conner@gmail.com
            </span>
            <span className="header__favorite-count">{favoriteCount}</span>
          </Link>
        </li>
        <li className="header__nav-item">
          <a className="header__nav-link" href="#">
            <span className="header__signout" onClick={logOutAction}>
              Sign out
            </span>
          </a>
        </li>
      </ul>
    </nav>
  ) : (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link
            className="header__nav-link header__nav-link--profile"
            to={AppRoute.Login}
          >
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            <span className="header__login">Sign in</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
