import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import SettingsPage from "./components/SettingsCards/SettingsPage";

const App = () => {
  //   return (
  //     <>
  //       <SettingsPage />
  //     </>
  //   );
  // };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/settings">settingsPage</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/settings">
          <SettingsPage />
        </Route>
        <Route path="/users">
          <SettingsPage />
        </Route>
        <Route path="/">
          <SettingsPage />
        </Route>
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
