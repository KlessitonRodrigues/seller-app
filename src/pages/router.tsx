import { Route, createRoutesFromElements } from "react-router-dom";

const Router = createRoutesFromElements(
  <>
    <Route path="/" lazy={() => import("./leads")} />
    <Route path="/opportunities" lazy={() => import("./opportunities")} />
    <Route path="/database" lazy={() => import("./database")} />
    <Route path="/*" lazy={() => import("./404")} />
  </>
);

export default Router;
