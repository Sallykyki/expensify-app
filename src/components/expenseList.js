import React from "react";
import ExpenseListItem from "./expenseListItem";
import getVisibleExpenses from "../selectors/expenses";
import { connect } from "react-redux";

const ExpenseList = props => (
  <div>
    <h1>ExpenseList</h1>
    {props.expenses.map(expense => {
      return <ExpenseListItem key={expense.id} {...expense} />;
    })}
  </div>
);

const mapStateToProps = state => {
  return { expenses: getVisibleExpenses(state.expenses, state.filters) };
};

export default connect(mapStateToProps)(ExpenseList);
