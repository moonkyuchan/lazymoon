import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/Store/Reducers";

import { FrontType } from "@root/src/Configs";

const initialState: FrontType.ArticleType = {
  title: "",
  tag: [],
  article: "",
  comment: null,
  like: 0,
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    setTitle: (
      state,
      action: PayloadAction<FrontType.ArticleType["title"]>
    ) => {
      state.title = action.payload;
    },
    setTag: (state, action: PayloadAction<FrontType.ArticleType["tag"]>) => {
      state.tag = action.payload;
    },
    setArticle: (
      state,
      action: PayloadAction<FrontType.ArticleType["article"]>
    ) => {
      state.article = action.payload;
    },
    setComment: (
      state,
      action: PayloadAction<FrontType.ArticleType["comment"]>
    ) => {
      state.comment = action.payload;
    },
    setLike: (state, action: PayloadAction<FrontType.ArticleType["like"]>) => {
      state.like = action.payload;
    },
  },
});

export const { setTitle, setTag, setArticle, setComment, setLike } =
  articleSlice.actions;

export default articleSlice.reducer;
