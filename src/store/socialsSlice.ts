import { createSlice } from "@reduxjs/toolkit";
import github from "src/assets/icons/github-icon.svg";
import linkedin from "src/assets/icons/linkedin-icon.svg";
import tg from "src/assets/icons/tg-icon.svg";
import githubBl from "src/assets/icons/github-icon-black.svg";
import linkedinBl from "src/assets/icons/linkedin-icon-black.svg";
import tgBl from "src/assets/icons/tg-icon-black.svg";


const socialsSlice = createSlice({
  name: "socials",
  initialState: {
    socials: [
      {
        name: "github",
        link: "https://github.com/Matushini97",
        iconBlack: githubBl,
        iconWhite: github,
      },
      {
        name: "linkedin",
        link: "https://www.linkedin.com/in/ilya-matsiushyn-165602229/",
        iconBlack: linkedinBl,
        iconWhite: linkedin,
      },
      {
        name: "tg",
        link: "https://t.me/Matushini",
        iconBlack: tgBl,
        iconWhite: tg,
      },
    ],
  },
  reducers: {},
});

export const socialsReducer: string[] = socialsSlice.reducer;
