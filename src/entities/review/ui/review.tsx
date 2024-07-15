import { TReview } from '@shared/types';
import { ReviewInfo } from './review-info/ui';

type TRev = {
  review: TReview;
};

export function Review({ review }: TRev): JSX.Element {
  const { id, date, user, rating, comment } = review;

  return (
    <li className="reviews__item" id={id}>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={user.avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <ReviewInfo text={comment} date={date} rating={rating} />
    </li>
  );
}
