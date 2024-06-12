import { Review } from '@entities/review/ui';

export function ReviewList(): JSX.Element {
  return (
    <ul className="reviews__list">
      <Review />
      <Review />
    </ul>
  );
}
