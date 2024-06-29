type TReviewText = {
  text: string;
};

export function ReviewText({ text }: TReviewText): JSX.Element {
  return <p className="reviews__text">{text}</p>;
}
