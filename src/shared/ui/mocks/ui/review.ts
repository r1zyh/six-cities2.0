import { TReview } from '../type';

export const reviews: TReview[] = [
  {
    id: crypto.randomUUID(),
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Bebrus',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false,
    },
    comment:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4,
  },
  {
    id: crypto.randomUUID(),
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Giga Morj',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: true,
    },
    comment:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4,
  },
  {
    id: crypto.randomUUID(),
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Vova Gysev',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: true,
    },
    comment:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4,
  },
  {
    id: crypto.randomUUID(),
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Emilia Shchelkunova',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false,
    },
    comment:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4,
  },
];
