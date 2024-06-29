import { Review } from '@entities/review/ui';
import { useAppSelector } from '@shared/lib/hooks/useSelector/useSelector';
import { getReviews } from '@shared/store/review-process';

export function ReviewList(): JSX.Element {
  const reviews = useAppSelector(getReviews);
  if (!reviews) {
    throw new Error('Sorry! Cant get reviews properly(');
  }
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <Review review={review} key={review.id} />
      ))}
    </ul>
  );
}
