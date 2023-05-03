import { createSlice } from "@reduxjs/toolkit";
import github from "../assets/icons/github-icon.svg";
import linkedin from "../assets/icons/linkedin-icon.svg";
import tg from "../assets/icons/tg-icon.svg";
import githubBl from "../assets/icons/github-icon-black.svg";
import linkedinBl from "../assets/icons/linkedin-icon-black.svg";
import tgBl from "../assets/icons/tg-icon-black.svg";

export type SocialsType = {
  name: string,
  link: string,
  iconBlack: string,
  iconWhite: string,
}

type SocialsState = {
  socials: SocialsType[]
}

const initialState: SocialsState = {
  socials:[
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
  ]
}

const socialsSlice = createSlice({
  name: "socials",
  initialState,
  reducers: {},
});

export const socialsReducer = socialsSlice.reducer;
