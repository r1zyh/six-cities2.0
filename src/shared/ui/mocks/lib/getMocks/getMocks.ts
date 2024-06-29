import { TOffer, TReview } from '../../type';
import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 12,
    min: 4,
  },
});

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomAvatar() {
  const avatars = ['img/avatar-max.jpg', 'img/avatar-angelina.jpg'];

  return avatars[getRandomInt(0, 2)];
}

function getRandomDate() {
  const day = Math.floor(Math.random() * 31) + 1;

  const month = Math.floor(Math.random() * 12);

  const startYear = 2000;
  const endYear = 2023;
  const year =
    Math.floor(Math.random() * (endYear - startYear + 1)) + startYear;

  const randomDate = new Date(year, month, day);

  return randomDate.toDateString();
}

export const getMockReviews = (baseReviews: TReview[], count: number) => {
  const existingData = [...baseReviews];
  const originalCount = baseReviews.length;
  const randomIndex = getRandomInt(0, originalCount);
  const baseItem = baseReviews[randomIndex];
  while (existingData.length < count) {
    const newItem = {
      ...baseItem,
      id: crypto.randomUUID(),
      date: getRandomDate(),
      user: {
        name: lorem.generateWords(1),
        avatarUrl: getRandomAvatar(),
        isPro: Math.random() > 0.5,
      },
      comment: lorem.generateSentences(2),
      rating: baseItem.rating + getRandomInt(-5, 5),
    };
    existingData.push(newItem);
  }
  return existingData;
};

export const getMockOffers = (baseOffers: TOffer[], count: number) => {
  const existingData = [...baseOffers];
  const originalCount = baseOffers.length;
  const randomIndex = getRandomInt(0, originalCount);
  const baseItem = baseOffers[randomIndex];

  while (existingData.length < count) {
    const newItem = {
      ...baseItem,
      id: crypto.randomUUID(),
      title: lorem.generateSentences(1),
      price: baseItem.price + getRandomInt(-50, 50),
      location: {
        ...baseItem.location,
        latitude: baseItem.location.latitude + Math.random() / 100,
        longitude: baseItem.location.longitude + Math.random() / 100,
      },
      isFavorite: Math.random() > 0.5,
      isPremium: Math.random() > 0.5,
      rating: baseItem.rating + getRandomInt(-5, 5),
    };
    existingData.push(newItem);
  }
  return existingData;
};
