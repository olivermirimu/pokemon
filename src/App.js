import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router";
import MainNav from "./components/shared/MainNav";
import LoadingSpinner from "./components/shared/widgets/LoadingSpinner";
import Footer from "./components/shared/Footer";
import "./App.css";

// lazy loaded components
const IndividualPokemon = lazy(() => import("./components/IndividualPokemon"));
const ViewAllPokemon = lazy(() => import("./components/ViewAllPokemon"));
const Home = lazy(() => import("./components/Home"));
const PageNotFound = lazy(() => import("./components/PageNotFound"));

const App = ({ history }) => {
  return (
    <>
      <MainNav />
      <div className="app">
        <div id="app-body">
          {/* <div id="app-mask" className="hide"></div> */}
          <Suspense fallback={<LoadingSpinner />}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/pokemon" component={ViewAllPokemon} />
              <Route
                exact
                path="/pokemon/:name"
                component={IndividualPokemon}
              />
              <Route component={PageNotFound} />
            </Switch>
          </Suspense>
          <div
            id="toast-container"
            style={{ position: "relative", width: "100%", background: "blue" }}
          ></div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
