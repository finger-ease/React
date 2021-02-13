import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListPage from "./ListPage";
import CreatePage from "./CreatePage";
import EditPage from "./EditPage";
import DeletePage from "./DeletePage";
function App() {
  return (
    <BrowserRouter>
      <h1>TODO APP</h1>
      <Switch>
        <Route exact path="/" component={ListPage}></Route>
        <Route exact path="/create" component={CreatePage}></Route>
        <Route exact path="/edit/:id" component={EditPage}></Route>
        <Route exact path="/delete/:id" component={DeletePage}></Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
