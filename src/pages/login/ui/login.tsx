import { Header } from '../../../widgets/header/ui';
import { LoginForm } from '../../../features/login-form/ui';
import { LoginLocation } from '../../../features/login-location/ui';

export function Login(): JSX.Element {
  return (
    <div className="page page--gray page--login">
      <Header />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <LoginForm />
          <LoginLocation />
        </div>
      </main>
    </div>
  );
}
