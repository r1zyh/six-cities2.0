type TOfferInside = {
  goods: string[];
};

export function OfferInside({ goods }: TOfferInside): JSX.Element {
  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What&apos;s inside</h2>
      <ul className="offer__inside-list">
        {goods.map((good) => (
          <li className="offer__inside-item" key={crypto.randomUUID()}>
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
}
