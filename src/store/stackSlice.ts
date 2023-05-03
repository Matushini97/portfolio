import { createSlice } from "@reduxjs/toolkit";
import html from "../assets/stackIcons/html5.png";
import css from "../assets/stackIcons/css3.png";
import js from "../assets/stackIcons/js.png";
import react from "../assets/stackIcons/react.png";
import redux from "../assets/stackIcons/redux.png";
import sass from "../assets/stackIcons/sass.png";

export type StackType = {
  title: string;
  icon: string;
};

type StackState = {
  stack: StackType[];
};

const initialState: StackState = {
  stack: [
    {
      title: "html",
      icon: html,
    },
    {
      title: "css",
      icon: css,
    },
    {
      title: "js",
      icon: js,
    },
    {
      title: "react",
      icon: react,
    },
    {
      title: "redux",
      icon: redux,
    },
    {
      title: "sass",
      icon: sass,
    },
  ],
};

const stackSlice = createSlice({
  name: "socials",
  initialState,
  reducers: {},
});

export const stackReducer = stackSlice.reducer;
