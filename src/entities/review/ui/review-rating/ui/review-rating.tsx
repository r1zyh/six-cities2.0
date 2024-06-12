export function ReviewRating(): JSX.Element {
  return (
    <div className="reviews__rating rating">
      <div className="reviews__stars rating__stars">
        <span style={{ width: '80%' }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}
