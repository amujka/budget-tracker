export const validateForm = (transaction) => {
  let errors = {};
  if (transaction.category === "") {
    errors.category = "Select category";
  }
  if (transaction.amount === "") {
    errors.amount = "Enter amount";
  }
  if (errors.category === undefined && errors.amount === undefined) {
    errors = {};
  }
  //console.log(errors);
  return errors;
};
