import s from "./Portfolio.module.scss";
import { PortfolioItem } from "../../PortfolioItem";
import { RootState } from "../../../store/store";
import { PortfolioType } from "../../../store/portfolioSlice";
import { useSelector } from "react-redux";

const Portfolio = () => {
  const sites = useSelector<RootState, PortfolioType[]>(
    (state) => state.sites.sites
  );
  return (
    <div className={s.PortfolioWrapper} id='projets'>
      <h2>Portfolio</h2>
      {sites.map((site) => {
        return (
          <PortfolioItem
              title={site.title}
              info={site.info}
              url={site.url}
              img={site.img}
              stack={site.stack}
              codeSource={site.codeSource}
          />
        );
      })}
    </div>
  );
};

export default Portfolio;
