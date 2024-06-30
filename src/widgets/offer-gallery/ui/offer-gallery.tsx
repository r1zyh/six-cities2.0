type TOfferGallery = {
  images: string[];
};

export function OfferGalley({ images }: TOfferGallery): JSX.Element {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {images.map((image) => (
          <div className="offer__image-wrapper" key={crypto.randomUUID()}>
            <img
              className="offer__image"
              src={`img/${image}`}
              alt={`${image}-preview`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
