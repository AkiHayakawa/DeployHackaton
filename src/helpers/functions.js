export function getCountGamesInCart() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  return cart ? cart.games.length : 0;
}

export const calcSubPrice = game => +game.count * game.item.price;

export const calcTotalPrice = games => {
  return games.reduce((pV, cur) => {
    return (pV += cur.subPrice);
  }, 0);
};
