import { Route, Switch } from "react-router-dom";
import { Home, About, Locations, Careers, NotFound } from "./pages";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/careers">
          <Careers/>
        </Route>
        <Route path="/locations">
          <Locations/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </>
  )
}

export default App
