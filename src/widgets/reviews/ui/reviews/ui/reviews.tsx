import { ReviewForm } from '@features/review-form/ui';
import { ReviewList } from '../../review-list/ui';
import { useAppSelector } from '@shared/lib/hooks/useSelector/useSelector';
import { getReviewsCount } from '@shared/store/review-process';

export function Reviews(): JSX.Element {
  const reviewsCount = useAppSelector(getReviewsCount);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{reviewsCount}</span>
      </h2>
      <ReviewList />
      <ReviewForm />
    </section>
  );
}
