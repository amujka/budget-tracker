import React from "react";

import classes from "./TransactionListItem.module.scss";
const TransactionListItem = ({ transaction, deleteTransaction }) => (
  <li>
    <div>
      <i
        className={[
          classes.icon,
          "fas fa-dollar-sign",
          transaction.type === "income" ? classes.income : classes.expense,
        ].join(" ")}
      ></i>
    </div>
    <div className={classes.transactionInfo}>
      <p>{transaction.category}</p>
      <div className={classes.innerWrap}>
        <small>
          {transaction.amount}kn - {transaction.date}
        </small>

        <button
          className={classes.delete}
          onClick={() => deleteTransaction(transaction.id)}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  </li>
);

export default TransactionListItem;
