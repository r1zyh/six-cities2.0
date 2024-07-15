import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '@shared/const';
import reviews from '@shared/data/mock-review.json';
import { TReview } from '@shared/types';

type ReviewProcessType = {
  reviews: TReview[];
  isCommentPosting: boolean;
};

export const initialState: ReviewProcessType = {
  reviews: reviews,
  isCommentPosting: false,
};

export const reviewProcessSlice = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {
    setReviews: (state, action: PayloadAction<TReview[]>) => {
      state.reviews = action.payload;
    },
    updateReviews: (state, action: PayloadAction<TReview>) => {
      state.reviews = [...state.reviews, action.payload] as TReview[];
    },
    setCommentPostStatus: (state, action: PayloadAction<boolean>) => {
      state.isCommentPosting = action.payload;
    },
  },
});
