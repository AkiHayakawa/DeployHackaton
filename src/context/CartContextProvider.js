import React, { createContext, useContext, useReducer } from "react";
import { CART } from "../helpers/consts";
import {
  getCountGamesInCart,
  calcSubPrice,
  calcTotalPrice,
} from "../helpers/functions";

const cartContext = createContext();
export const useCart = () => useContext(cartContext);

const INIT_STATE = {
  cart: JSON.parse(localStorage.getItem("cart")),
  cartLength: getCountGamesInCart(),
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case CART.GET_CART:
      return { ...state, cart: action.payload };
    case CART.GET_CART_LENGTH:
      return { ...state, cartLength: action.payload };
    default:
      return state;
  }
}

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (!cart) {
      localStorage.setItem(
        "cart",
        JSON.stringify({
          games: [],
          totalPrice: 0,
        })
      );

      cart = {
        games: [],
        totalPrice: 0,
      };
    }

    dispatch({
      type: CART.GET_CART,
      payload: cart,
    });

    dispatch({
      type: CART.GET_CART_LENGTH,
      payload: getCountGamesInCart(),
    });
  };

  const addGameToCart = game => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (!cart) {
      cart = {
        games: [],
        totalPrice: 0,
      };
    }

    let newGame = {
      item: game,
      count: 1,
      subPrice: +game.price,
    };

    let gameToFind = cart.games.filter(elem => elem.item.id === game.id);

    if (gameToFind.length === 0) {
      cart.games.push(newGame);
    } else {
      cart.games = cart.games.filter(elem => elem.item.id !== game.id);
    }

    cart.totalPrice = calcTotalPrice(cart.games);

    localStorage.setItem("cart", JSON.stringify(cart));

    getCart();
  };

  const changeGameCount = (count, id) => {
    if (count < 1) {
      alert("Count of game can not be negative!");
      return;
    }

    let cart = JSON.parse(localStorage.getItem("cart"));

    cart.games = cart.games.map(game => {
      if (game.item.id === id) {
        game.count = count;
        game.subPrice = calcSubPrice(game);
      }
      return game;
    });

    cart.totalPrice = calcTotalPrice(cart.games);
    localStorage.setItem("cart", JSON.stringify(cart));

    getCart();
  };

  const deleteGameInCart = id => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    cart.games = cart.games.filter(elem => elem.item.id !== id);
    cart.totalPrice = calcTotalPrice(cart.games);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  };

  const checkGameInCart = id => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (cart) {
      let newCart = cart.games.filter(elem => elem.item.id === id);
      return newCart.length > 0 ? true : false;
    }
  };

  const values = {
    addGameToCart,
    getCart,
    changeGameCount,
    deleteGameInCart,
    checkGameInCart,

    cart: state.cart,
    cartLength: state.cartLength,
  };

  return <cartContext.Provider value={values}>{children}</cartContext.Provider>;
};

export default CartContextProvider;
