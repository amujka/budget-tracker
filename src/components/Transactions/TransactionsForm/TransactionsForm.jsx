import React, { useContext, useEffect, useState } from "react";
import classes from "./TransactionsForm.module.scss";
import { ExpenseTrackerContext } from "../../../context/context";
import { validateForm } from "../../../assets/utils/validateForm";
import {
  incomeCategories,
  expenseCategories,
} from "../../../assets/constants/categories/categories";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  amount: "",
  category: "",
  date: new Date().toISOString().substr(0, 10),
  type: "income",
};

const TransactionsForm = () => {
  const { addTransaction } = useContext(ExpenseTrackerContext);
  const [transactionData, setTransactionData] = useState(initialState);
  const [error, setError] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const categories =
    transactionData.type === "income" ? incomeCategories : expenseCategories;

  const submitHandler = (e) => {
    e.preventDefault();
    setError(validateForm(transactionData));
    setIsSubmitting(true);
  };
  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmitting) {
      const transaction = {
        ...transactionData,
        amount: Number(transactionData.amount),
        id: uuidv4(),
      };
      addTransaction(transaction);

      setTransactionData(initialState);
    }
  }, [error]);
  return (
    <div className={classes.TransactionsForm}>
      <form onSubmit={(e) => submitHandler(e)}>
        <div>
          {/*dropdown menu */}
          <div className={classes.dropDownWrapper}>
            <div className={classes.typeDropDown}>
              <div>
                <label>Type</label>
              </div>
              <select
                name="type"
                id="type"
                value={transactionData.type}
                onChange={(e) =>
                  setTransactionData({
                    ...transactionData,
                    type: e.target.value,
                  })
                }
              >
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
            </div>
            <div className={classes.categoryDropDown}>
              <div>
                <label>Category</label>
              </div>
              <select
                className={error.category ? classes.error : null}
                id="category"
                value={transactionData.category}
                onChange={(e) =>
                  setTransactionData({
                    ...transactionData,
                    category: e.target.value,
                  })
                }
              >
                <option value="" disabled>
                  Select category
                </option>
                {categories.map((cat) => {
                  return (
                    <option key={cat.type} value={cat.type}>
                      {cat.type}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          {/* end dropdown menu */}
          {/* start input*/}
          <div className={classes.inputWrapper}>
            <div className={classes.amountInput}>
              <div>
                <label htmlFor="">Amount</label>
              </div>
              <div>
                <input
                  className={error.amount ? classes.error : null}
                  type="number"
                  value={transactionData.amount}
                  onChange={(e) =>
                    setTransactionData({
                      ...transactionData,
                      amount: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className={classes.dateInput}>
              <div>
                <label htmlFor="">Date</label>
              </div>
              <div>
                <input
                  type="date"
                  value={transactionData.date}
                  onChange={(e) =>
                    setTransactionData({
                      ...transactionData,
                      date: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>
          {/* end input */}
        </div>
        <button
          className={`${classes.submit} ${
            transactionData.type === "income" ? classes.income : classes.expense
          }`}
        >
          Add {transactionData.type}
        </button>
      </form>
    </div>
  );
};

export default TransactionsForm;
