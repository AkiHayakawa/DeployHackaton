import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gameContext } from "../gameContext";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useCart } from "../context/CartContextProvider";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import IconButton from "@mui/material/IconButton";
import Pagination from "@mui/material/Pagination";
import "../styles/Footer.css";
import LikeGame from "./LikeGame";
const GameList = ({ page, setPage }) => {
  const { getGames, games, deleteGame } = useContext(gameContext);
  const { addGameToCart, checkGameInCart } = useCart();

  useEffect(() => {
    getGames();
  }, []);

  const itemsOnPage = 6

  const count = Math.ceil(games.length / itemsOnPage);

  const handlePage = (e, p) => {
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemsOnPage;
    const end = begin + itemsOnPage;
    return games.slice(begin, end);
  }

  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        className="CardList"
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {games ? (
          currentData().map((item) => (
            <Card style={{ margin: "20px" }} sx={{ maxWidth: 280 }}>
              <CardMedia
                component="img"
                alt="error"
                height="280"
                image={item.img}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  ${item.price}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {item.type}
                </Typography>
              </CardContent>
              <CardActions>
                <LikeGame id={item.id} />
                <Button onClick={() => deleteGame(item.id)}>Delete</Button>
                <Button onClick={() => navigate(`/edit/${item.id}`)}>
                  Edit
                </Button>
                <Button onClick={() => navigate(`/details/${item.id}`)}>
                  Details
                </Button>
                <IconButton size="small" onClick={() => addGameToCart(item)}>
                  <AddShoppingCartOutlinedIcon
                    color={checkGameInCart(item.id) ? "primary" : ""}
                  />
                </IconButton>
              </CardActions>
            </Card>
          ))
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
      <Pagination
        count={count}
        page={page}
        onChange={handlePage}
        color="primary"
      />
      <br />
    </div>
  );
};

export default GameList;
