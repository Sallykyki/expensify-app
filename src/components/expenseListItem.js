import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeExpense } from "../actions/expenses";
const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <p>Description: {description}</p>
    <p>Amount: {amount}</p>
    <p>Created at: {createdAt}</p>
    <button
      onClick={() => {
        dispatch(removeExpense({ id }));
      }}
    >
      Remove
    </button>
    <Link to={`/edit/${id}`}>
      <button>Edit</button>
    </Link>
  </div>
);

export default connect()(ExpenseListItem);
