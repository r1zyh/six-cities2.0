import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '@shared/const';
import { TReview } from '@shared/ui/mocks/type';

type ReviewProcessType = {
  reviews: TReview[];
  isCommentPosting: boolean;
};

export const initialState: ReviewProcessType = {
  reviews: [],
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
