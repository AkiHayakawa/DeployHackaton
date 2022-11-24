import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { gameContext } from "../gameContext";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const EditGame = () => {
  const { getOneGame, oneGame, updateGame } = useContext(gameContext);

  const { id } = useParams();

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    getOneGame(id);
  }, []);

  useEffect(() => {
    if (oneGame) {
      setTitle(oneGame.title);
      setImg(oneGame.img);
      setPrice(oneGame.price);
      setType(oneGame.type);
      setDescription(oneGame.description);
    }
  }, [oneGame]);

  function saveChanges() {
    if (!title || !img || !price || !type||  !description) {
      alert("Some inputs are empty!");
      return;
    }

    let editGame = {
      title,
      img,
      price,
      type,
      description,
    };

    updateGame(id, editGame);
    navigate("/games");
  }

  return oneGame ? (
    <div className="InputDiv">
      <TextField
        className="Input"
        id="outlined-search"
        label="Title"
        type="search"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <TextField
        className="Input"
        id="outlined-search"
        label="Img"
        type="search"
        value={img}
        onChange={e => setImg(e.target.value)}
      />
      <TextField
        className="Input"
        id="outlined-search"
        label="Price"
        type="search"
        value={price}
        onChange={e => setPrice(e.target.value)}
      />
      <TextField
        className="Input"
        id="outlined-search"
        label="Type"
        type="search"
        value={type}
        onChange={e => setType(e.target.value)}
      />
      <TextField
        className="Input"
        id="outlined-search"
        label="Description"
        type="search"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          onClick={() => {
            saveChanges();
            navigate("/");
          }}>
          Save Changes
        </Button>
      </Stack>
    </div>
  ) : (
    <h2>Loading...</h2>
  );
};

export default EditGame;