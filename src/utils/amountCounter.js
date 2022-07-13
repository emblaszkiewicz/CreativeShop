export const amountCounter = (arr) => {
  let amount = 0;

  if (arr !== null) {
    for (let i of arr) {
      amount = amount + i.totalPrice;
    }
  }

  return amount;
};
