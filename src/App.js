import { Route, Switch, Redirect } from "react-router-dom";
import { Suspense, React } from "react";
import AllQuotes from "./components/pages/AllQuotes";

import Layout from "./components/layout/Layout";
import QuoteDetail from "./components/pages/QuoteDetail";
import NotFound from "./components/pages/NotFound";

const NewQuote = React.lazy(() => import("./components/pages/NewQuote"));

function App() {
  return (
    <Layout>
      <Suspense fallback={<p>Loading....</p>}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes"></Redirect>
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="/new-quotes">
            <NewQuote />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
