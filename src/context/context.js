import React, { useReducer, createContext } from "react";
import contextReducer from "./contextReducer";
const initState = JSON.parse(localStorage.getItem("transactions")) || [];
export const ExpenseTrackerContext = createContext(initState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initState);

  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };
  const addTransaction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };
  // console.log({ transactions });

  const balance = transactions.reduce((acc, curValue) => {
    return curValue.type === "income"
      ? (acc += curValue.amount)
      : (acc -= curValue.amount);
  }, 0);

  return (
    <ExpenseTrackerContext.Provider
      value={{ deleteTransaction, addTransaction, transactions, balance }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
