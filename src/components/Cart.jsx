import React, { useContext, useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useCart } from "../context/CartContextProvider";
import { Button, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};




export default function Cart() {
  const { getCart, cart, changeGameCount, deleteGameInCart } = useCart();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [number, setNumber] = useState("");
  const [counter, setCounter] = useState("");
  const [pin,setPin] = useState('')
  React.useEffect(() => {
    getCart();
  }, []);
  function cartCleaner() {
    localStorage.removeItem("cart");
    getCart();
  }

  function payment() {
    let obj = {
     number,
     counter,
     pin
    };
setCounter('');
setPin("");
    setNumber("");
    cartCleaner()
    handleClose()
  }  


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Type</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Count</TableCell>
            <TableCell align="center">Sub Price</TableCell>
            <TableCell align="center">---</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart?.games.map(row => (
            <TableRow
              key={row.item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell>
                <img src={row.item.img} alt="" width="50" />
              </TableCell>
              <TableCell align="center">{row.item.title}</TableCell>
              <TableCell align="center">{row.item.type}</TableCell>
              <TableCell align="center">${row.item.price}</TableCell>
              <TableCell align="center">
                <TextField
                  type="number"
                  value={row.count}
                  onChange={e => changeGameCount(e.target.value, row.item.id)}
                />
              </TableCell>
              <TableCell align="center">{row.subPrice}</TableCell>
              <TableCell align="center">
                <button onClick={() => deleteGameInCart(row.item.id)}>
                  Delete From Cart
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Typography variant="h6" component="div">
        Total Price: ${cart?.totalPrice}
        <div>
            <Typography
              variant="h6"
              noWrap
              component="a"
              onClick={handleOpen}
          
              href="#"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              BUY-NOW{" "}
            </Typography>
            <Modal
              keepMounted
              open={open}
              onClose={handleClose}
              aria-labelledby="keep-mounted-modal-title"
              aria-describedby="keep-mounted-modal-description"
            >
              <Box sx={style}>
                <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                  НОМЕР КАРТЫ{" "}
                </Typography>
                <TextField
                  id="outlined-search"
                  label="number"
                  type="search"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
                 <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                  CVV{" "}
                </Typography>
                <TextField
                  id="outlined-search"
                  label="CVV"
                  type="search"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                />
                <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                  АДРЕС{" "}
                </Typography>
                <TextField
                  id="outlined-search"
                  label="address"
                  type="search"
                  value={counter}
                  onChange={(e) => setCounter(e.target.value)}
                />
                <Button
                  onClick={payment}
                  style={{ marginTop: "10px", marginLeft: "32px" }}
                  variant="contained"
                >
                  Buy
                </Button>
              </Box>
            </Modal>
          </div>
    
      </Typography>
    </TableContainer>
  );
}
