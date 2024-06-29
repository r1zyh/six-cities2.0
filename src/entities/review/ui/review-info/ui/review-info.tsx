import { ReviewRating } from '../../review-rating/ui';
import { ReviewText } from '../../review-text/ui';
import { ReviewTime } from '../../review-time/ui';
import { Layout } from './layout';

type TReviewInfo = {
  text: string;
  date: string;
  rating: number;
};

export function ReviewInfo({ text, date, rating }: TReviewInfo): JSX.Element {
  return (
    <Layout>
      <ReviewRating rating={rating} />
      <ReviewText text={text} />
      <ReviewTime time={date} />
    </Layout>
  );
}
