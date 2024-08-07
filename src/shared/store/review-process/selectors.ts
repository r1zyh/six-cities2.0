import { TReview } from '@shared/types';
import { State } from '../state/ui/state';
import { NameSpace } from '@shared/const';

export const getReviews = (state: State): TReview[] | null =>
  state[NameSpace.Reviews].reviews;

export const getCommentPostStatus = (state: State): boolean =>
  state[NameSpace.Reviews].isCommentPosting;

export const getReviewsCount = (state: State): number | null =>
  state[NameSpace.Reviews].reviews.length;
