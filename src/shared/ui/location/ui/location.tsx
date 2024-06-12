import { favoriteType } from '../../../const';

type TLocation = {
  type?: string;
};

export function Location({ type }: TLocation): JSX.Element {
  return type === favoriteType ? (
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <a className="locations__item-link" href="#">
          <span>Amsterdam</span>
        </a>
      </div>
    </div>
  ) : (
    <section className="locations locations--login locations--current">
      <div className="locations__item">
        <a className="locations__item-link" href="#">
          <span>Amsterdam</span>
        </a>
      </div>
    </section>
  );
}
