import React, { useState, useReducer } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export const gameContext = React.createContext();

const INIT_STATE = {
  games: [],
  oneGame: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_GAMES":
      return { ...state, games: action.payload };
    case "GET_ONE_GAME":
      return { ...state, oneGame: action.payload };
    default:
      return state;
  }
}

const GameContextProvider = ({ children }) => {
const API = "http://Okumura-japan.vercel.com/api/games";
  const location = useLocation();
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function addGame(newGame) {
    await axios.post(API, newGame);
    getGames();
  }

  async function getGames() {
    console.log(window.location.search);

    const { data } = await axios(`${API}/${window.location.search}`);
    dispatch({
      type: "GET_GAMES",
      payload: data,
    });
  }

  async function deleteGame(id) {
    await axios.delete(`${API}/${id}`);
    getGames();
  }

  async function getOneGame(id) {
    let res = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_GAME",
      payload: res.data,
    });
  }

  async function updateGame(id, editedGame) {
    await axios.patch(`${API}/${id}`, editedGame);
  }
  async function likePatch(id,likeObj) {
    await axios.patch(`${API}/${id}`, { like:  likeObj.like });
  }
  const fetchByParams = (query, value) => {
    const search = new URLSearchParams(location.search);

    if (value === "games") {
      search.delete(query);
    } else {
      search.set(query, value);
    }

    const url = `${location.pathname}?${search.toString()}`;

    navigate(url);
  };
  return (
    <gameContext.Provider
      value={{
        games: state.games,
        oneGame: state.oneGame,

        addGame,
        getGames,
        deleteGame,
        getOneGame,
        updateGame,
        fetchByParams,
        likePatch
      }}
    >
      {children}
    </gameContext.Provider>
  );
};

export default GameContextProvider;
