import React from "react";
import ExpenseDashboardPage from "../components/dashboard";
import AddExpensePage from "../components/addpage";
import EditExpensePage from "../components/editpage";
import HelpPage from "../components/helppage";
import NotfoundPage from "../components/notfoundpage";
import Header from "../components/header";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={ExpenseDashboardPage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotfoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
