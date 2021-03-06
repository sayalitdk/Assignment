import React from "react";
import "./App.css";
import Card from "./components/CardComponent/index";
import Timezone from "./components/TimezoneComponent";
import CardData from "./contexts/CardData";
import AddNumbers from "./components/AddNumbers/index";
import ButtonSection from "./components/ButtonSection/index";
import { DataContext } from "./contexts/DataContext";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav data-testid="navbar">
        <ul>
          <li>
            <Link to="/card" data-testid="card-link">
              Card
            </Link>
          </li>
          <li>
            <Link to="/buttons" data-testid="buttons-link">
              Buttons
            </Link>
          </li>
          <li>
            <Link to="/timezone" data-testid="timezone-link">
              Timezone
            </Link>
          </li>
          <li>
            <Link to="/addNumbers" data-testid="addNumbers-link">
              Add Numbers
            </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/card">
          <DataContext.Provider value={CardData}>
            <Card />
          </DataContext.Provider>
        </Route>
        <Route path="/buttons">
          <ButtonSection />
        </Route>
        <Route path="/timezone">
          <Timezone />
        </Route>
        <Route path="/addNumbers">
          <AddNumbers />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
