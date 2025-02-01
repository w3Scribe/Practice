import { type FC, Fragment } from "react";
import { FileRoutesByFullPath } from "../app.gen";

interface ILoader {
  path: keyof FileRoutesByFullPath ;
}

const Loader: FC<ILoader> = ({path}) => {
  return <Fragment>
    Loading {path}...
  </Fragment>;
};

export default Loader;
