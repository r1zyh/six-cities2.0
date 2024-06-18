import classNames from 'classnames';

type TMark = {
  type: string;
  isPremium: boolean;
};

export function Mark({ type, isPremium }: TMark): JSX.Element | null {
  if (!isPremium) {
    return null;
  }

  return (
    <div
      className={classNames({
        'place-card__mark': type === 'place-card',
        'offer__mark': type === 'offer',
      })}
    >
      <span>Premium</span>
    </div>
  );
}
