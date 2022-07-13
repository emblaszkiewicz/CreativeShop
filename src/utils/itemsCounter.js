export const itemsCounter = (arr) => {
  let items = 0;

  if (arr !== null) {
    for (let i of arr) {
      items = items + i.amount;
    }
  }

  return items;
};
