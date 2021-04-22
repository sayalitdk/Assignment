import React from "react";
import "./App.css";
import Card from "./components/CardComponent/index";
import Timezone from "./components/TimezoneComponent";
import CardData from "./contexts/CardData";
import { DataContext } from "./contexts/DataContext";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/card">Card</Link>
          </li>
          <li>
            <Link to="/timezone">Timezone</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/card">
          <DataContext.Provider value={CardData}>
            <Card />
          </DataContext.Provider>
        </Route>
        <Route path="/timezone">
          <Timezone />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
