import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GameContextProvider from "./gameContext";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import EditGame from "./components/EditGame";
import CreateGame from "./components/CreateGame";
import Details from "./components/Details";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import CartContextProvider from "./context/CartContextProvider";
import Cart from "./components/Cart";
import AuthContextProvider from "./context/AuthContextProvider";
import LikeGame from "./components/LikeGame";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <GameContextProvider>
            <AuthContextProvider>
              <Header/>
              <Routes>
                <Route path="/register" element={<RegistrationPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/create" element={<CreateGame />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/edit/:id" element={<EditGame />} />
                <Route path="/details/:id" element={<Details />} />
                <Route path="/likeGame/:id" element={<LikeGame />} />

              </Routes>

              <Footer />
            </AuthContextProvider>
          </GameContextProvider>
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
