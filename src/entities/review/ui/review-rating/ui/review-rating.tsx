import { RATING_MULTIPLIER } from '@shared/ui/card-rating/const';

type TReviewRating = {
  rating: number;
};

export function ReviewRating({ rating }: TReviewRating): JSX.Element {
  return (
    <div className="reviews__rating rating">
      <div className="reviews__stars rating__stars">
        <span style={{ width: `${rating / RATING_MULTIPLIER}%` }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}
