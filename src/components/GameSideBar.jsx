import React, { useContext, useEffect, useState } from "react";
import FilterGame from './FilterGame'
import { useSearchParams } from "react-router-dom";
import { gameContext } from "../gameContext";
import TextField from "@mui/material/TextField";

const GameSideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const { getGames } = useContext(gameContext);
 
  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  useEffect(() => {
    getGames();

  }, [searchParams]);

  return (
    <TextField 
    className="sideBar"
    type="text"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    placeholder="Search..."
    />
  )
};

export default GameSideBar;
