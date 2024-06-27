import { HeaderLogo } from './header-logo';
import { UserLoggedCheck } from './user-logged-check/ui';

export function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <HeaderLogo />
          </div>
          <UserLoggedCheck />
        </div>
      </div>
    </header>
  );
}
