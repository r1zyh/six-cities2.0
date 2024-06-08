import { Review } from '../../../entities/review/ui';
import { ReviewForm } from '../../../features/review-form/ui';

export function Reviews(): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">2</span>
      </h2>
      <ul className="reviews__list">
        <Review />
        <Review />
      </ul>
      <ReviewForm />
    </section>
  );
}
