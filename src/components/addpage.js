import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./expenseform";
import { addExpense } from "../actions/expenses";

const AddExpensePage = props => (
  <div>
    <h1>
      <ExpenseForm
        onSubmit={expense => {
          props.dispatch(addExpense(expense));
          props.history.push("/");
        }}
      />
    </h1>
  </div>
);

export default connect()(AddExpensePage);
