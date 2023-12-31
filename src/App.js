import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";
import { useEffect, useState } from "react";
import Cart from "./pages/Cart";

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) =>
        +item.id === +book.id ? { ...item, quantity: +quantity } : item
      )
    );
  }

  function removeBookFromCart(book) {
    setCart(cart.filter((item) => +item.id !== +book.id))
  }

  function numberOfItems () {
    let counter = 0;
    cart.forEach((item) => {
      counter += item.quantity
    })
    return counter
  }

  return (
    <>
      <Router>
        <Nav numberOfItems={numberOfItems()}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books books={books} />} />
          <Route
            path="/books/:id"
            element={
              <BookInfo books={books} addToCart={addToCart} cart={cart} />
            }
          />
          <Route
            path="/cart"
            element={<Cart removeBookFromCart={removeBookFromCart} changeQuantity={changeQuantity} cart={cart} />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
