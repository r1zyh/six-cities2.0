type TPlaceCardInfo = {
  title: string;
  type: string;
};

export function PlaceCardInfo({ title, type }: TPlaceCardInfo): JSX.Element {
  return (
    <>
      <h2 className="place-card__name">
        <a href="#">{title}</a>
      </h2>
      <p className="place-card__type">{type}</p>
    </>
  );
}
