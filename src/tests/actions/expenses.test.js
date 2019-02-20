import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});

test("should setup edit expense", () => {
  const action = editExpense("123", { note: "new note" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123",
    updates: {
      note: "new note"
    }
  });
});

test("should setup add expense", () => {
  const expenseData = {
    description: "shopping",
    amount: 67000,
    createdAt: 1000,
    note: "clothes spending"
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test("should set up add expense action object with default value", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0
    }
  });
});
