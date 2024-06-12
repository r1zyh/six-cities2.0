import { ReviewRating } from '../../review-rating/ui';
import { ReviewText } from '../../review-text/ui';
import { ReviewTime } from '../../review-time/ui';
import { Layout } from './layout';

export function ReviewInfo(): JSX.Element {
  return (
    <Layout>
      <ReviewRating />
      <ReviewText />
      <ReviewTime />
    </Layout>
  );
}
