import React from 'react';
import logo from './logo.svg';
import {Router,Switch,Route} from "react-router-dom";
import {ToDoListTable} from "../src/components/toDoListTable";
import { createBrowserHistory } from 'history';
import './App.css';

function App() {
  const history = createBrowserHistory();
  return (
    <React.Fragment>
      <Router history={history}>
        <Switch>
          <Route component={ToDoListTable} path="/to-do-list" exact />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
