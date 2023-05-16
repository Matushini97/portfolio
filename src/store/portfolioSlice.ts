import { createSlice } from "@reduxjs/toolkit";
import vans from '../assets/apps/product-list.png'

export type PortfolioType = {
  title: string;
  info: string;
  url: string;
  img: string;
  stack: string[];
  codeSource: string;
};

type PortfolioState = {
  sites: PortfolioType[];
};

const initialState: PortfolioState = {
  sites: [
    {
      title: "Vans rental",
      info: "A vans rental website is an online platform that allows users to rent vans for personal use. The website provides an interface for searching, comparing, and reserving cars.",
      url: "https://steady-sunshine-64d453.netlify.app/",
      img: vans,
      stack: ['React', 'React-Router'],
      codeSource: "https://github.com/Matushini97/VansRental"
    },
  ],
};

const portfolioSlice = createSlice({
  name: "sites",
  initialState,
  reducers: {},
});

export const portfolioReducer = portfolioSlice.reducer;
