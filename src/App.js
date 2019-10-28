import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import SettingsPage from "./components/SettingsCards/SettingsPage";
import AppBarTest from "./components/AppBarTest";

const App = () => {
  return (
    <div>
      <AppBarTest />

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/settings">
          <SettingsPage />
        </Route>
        <Route path="/users">
          <h2>text</h2>
        </Route>
        <Route path="/" />
      </Switch>
    </div>
  );
};

export default App;

// TODO: learn react route and apply to project
// TODO: react router
// TODO: redux
// TODO  doing async HTTP requests from front-end
// TODO: functional programming
// TODO: ramda
// TODO: storybook
