import React, { useContext } from "react";
import TransactionListItem from "./TransactionListItem/TransactionListItem";
import classes from "./TransactionsList.module.scss";
import { ExpenseTrackerContext } from "../../../context/context";
const TransactionsList = () => {
  const { transactions, deleteTransaction } = useContext(ExpenseTrackerContext);

  return (
    <ul className={classes.TransactionsList}>
      {transactions.map((transaction) => {
        return (
          <TransactionListItem
            transaction={transaction}
            key={transaction.id}
            deleteTransaction={deleteTransaction}
          />
        );
      })}
    </ul>
  );
};

export default TransactionsList;
