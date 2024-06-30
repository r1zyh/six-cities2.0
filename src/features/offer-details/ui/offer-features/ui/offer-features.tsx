type TOfferFeatures = {
  type: string;
  bedrooms: number;
  maxAdults: number;
};

export function OfferFeatures({
  type,
  bedrooms,
  maxAdults,
}: TOfferFeatures): JSX.Element {
  return (
    <ul className="offer__features">
      <li className="offer__feature offer__feature--entire">{type}</li>
      <li className="offer__feature offer__feature--bedrooms">
        {bedrooms} Bedrooms
      </li>
      <li className="offer__feature offer__feature--adults">
        Max {maxAdults} adults
      </li>
    </ul>
  );
}
