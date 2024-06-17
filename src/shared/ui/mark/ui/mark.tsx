import classNames from 'classnames';

type TMark = {
  type: string;
};

export function Mark({ type }: TMark): JSX.Element | null {
  const isPremium = true;
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
