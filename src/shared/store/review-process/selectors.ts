import { TReview } from '@shared/ui/mocks/type';
import { State } from '../state/ui/store';
import { NameSpace } from '@shared/const';

export const getReviews = (state: State): TReview[] | null =>
  state[NameSpace.Reviews].reviews;

export const getCommentPostStatus = (state: State): boolean =>
  state[NameSpace.Reviews].isCommentPosting;
