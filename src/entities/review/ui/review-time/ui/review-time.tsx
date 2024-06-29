import { humanizeDate } from '@shared/lib/date-format/date-format';

type TReviewTime = {
  time: string;
};

export function ReviewTime({ time }: TReviewTime): JSX.Element {
  return (
    <time className="reviews__time" dateTime="2019-04-24">
      {humanizeDate(time)}
    </time>
  );
}
