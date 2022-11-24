import React, { useContext, useState } from "react";
import { gameContext } from "../gameContext";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const CreateUser = () => {
  const { addGame } = useContext(gameContext);
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [like, setlike] = useState(0);
  const [comments, setComments] = useState("");
  function addForm() {
    if (!title || !img || !price || !type || !description) {
      alert("Some inputs are empty!");
      return;
    }

    let newGame = {
      title,
      img,
      price,
      type,
      description,
      like,
      comments,
    };

    addGame(newGame);

    setTitle("");
    setImg("");
    setPrice("");
    setType("");
    setDescription("");
  }
  return (
    <div className="InputDiv">
      <TextField
        className="Input"
        id="outlined-search"
        label="Title"
        type="search"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        className="Input"
        id="outlined-search"
        label="Img"
        type="search"
        value={img}
        onChange={(e) => setImg(e.target.value)}
      />
      <TextField
        className="Input"
        id="outlined-search"
        label="Price"
        type="search"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <TextField
        className="Input"
        id="outlined-search"
        label="Type:horror,adventure,stragety,shooter"
        type="search"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
      <TextField
        className="Input"
        id="outlined-search"
        label="Description"
        type="search"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={addForm}>
          AddGame
        </Button>
      </Stack>
    </div>
  );
};

export default CreateUser;
