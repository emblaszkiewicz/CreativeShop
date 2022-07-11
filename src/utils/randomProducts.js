export const randomProducts = (arr) => {
  const sorted = [...arr].sort(() => 0.5 - Math.random());
  return sorted.slice(0, 4);
};
