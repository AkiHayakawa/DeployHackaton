import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { gameContext } from "../gameContext";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const LikeGame = ({ id }) => {
  const { getOneGame, oneGame, likePatch } = useContext(gameContext);
  const [plus, setPlus] = useState(false);
  const [like, setLike] = useState(0);
  useEffect(() => {
    getOneGame(id);
  }, []);
  useEffect(() => {
    if (oneGame) {
      setLike(oneGame.like);
    }
  }, [oneGame]);
console.log(id)
  const navigate = useNavigate();

  function PlusLIke() {
    if (plus === false) {
      setLike(like + 1);
      setPlus(true);
      updateLike()
    } else if (plus === true) {
      setLike(like - 1);
      setPlus(false);
      updateLike()
    }
  }
  function updateLike(){
    let likeObj = {
      like:like
    }
    likePatch(id,likeObj);
    navigate("/");
  }
  return oneGame ? (
    <div>
      <h3>{like}</h3>
      <Checkbox
        onClick={() => {
          PlusLIke();
          navigate("/");
        }}
        {...label}
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
      />

    </div>
  ) : (
    <h3>Loading...</h3>
  );
};

export default LikeGame;
