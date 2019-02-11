import { createStore } from "redux";

//action generators - functions that return action objects
// const incermentCount = (payload = {}) => ({
//   type: "INCREMENT",
//   incrementBy: typeof payload.incrementBy === "number" ? payload.incrementBy : 1
// });
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
});

const setCount = ({ setBy }) => ({
  type: "SET",
  setBy
});

const resetCount = () => ({
  type: "RESET"
});
//Reducers
// 1. Reducers are pure functions
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      };
    case "SET":
      return { count: action.setBy };
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
};
const store = createStore(countReducer);

const unsubcribe = store.subscribe(() => {
  console.log(store.getState());
});

//Actions - that an object that gets sent to the store
// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5
// });
store.dispatch(incrementCount({ incrementBy: 5 }));

// unsubcribe();

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ setBy: 101 }));
