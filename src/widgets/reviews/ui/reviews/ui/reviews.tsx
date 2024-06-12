import { ReviewForm } from '../../../../../features/review-form/ui';
import { ReviewList } from '../../review-list/ui';

export function Reviews(): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">2</span>
      </h2>
      <ReviewList />
      <ReviewForm />
    </section>
  );
}
