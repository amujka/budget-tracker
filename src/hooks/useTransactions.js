import { useContext } from "react";
import { ExpenseTrackerContext } from "../context/context";
import {
  incomeCategories,
  expenseCategories,
  resetCategories,
} from "../assets/constants/categories/categories";
const useTransactions = (title) => {
  resetCategories();

  const { transactions } = useContext(ExpenseTrackerContext);

  const transactionsPerType = transactions.filter((t) => t.type === title);
  const totalAmount = transactionsPerType.reduce(
    (acc, currVal) => (acc += currVal.amount),
    0
  );

  const categories = title === "income" ? incomeCategories : expenseCategories;
  //console.log({ transactionsPerType, totalAmount, categories });

  transactionsPerType.forEach((t) => {
    const category = categories.find((c) => c.type === t.category);
    if (category) {
      category.amount += t.amount;
    }
  });
  const filteredCategories = categories.filter((c) => c.amount > 0);
  const chartData = {
    datasets: [
      {
        data: filteredCategories.map((c) => c.amount),
        backgroundColor: filteredCategories.map((c) => c.color),
      },
    ],
    labels: filteredCategories.map((c) => c.type),
  };
  //console.log({ chartData });
  return { totalAmount, chartData };
};
export default useTransactions;
