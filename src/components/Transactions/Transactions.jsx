import React, { useContext } from "react";
import classes from "./Transactions.module.scss";
import TransactionsForm from "./TransactionsForm/TransactionsForm";
import TransactionsList from "./TransactionsList/TransactionsList";

import { ExpenseTrackerContext } from "../../context/context";
const Transactions = () => {
  const { balance } = useContext(ExpenseTrackerContext);
  return (
    <div className={classes.Transactions}>
      <div>
        <p className={classes.Transactions__balance}>
          Total balance: {balance} kn
        </p>
      </div>
      <div className={classes.Transactions__transactionsFormWrapper}>
        <TransactionsForm />
      </div>
      <div className={classes.Transactions__transactionsListWrapper}>
        <TransactionsList />
      </div>
    </div>
  );
};

export default Transactions;
