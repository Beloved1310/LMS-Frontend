import React from "react";
import "./App.css";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Homepage from "./components/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CoursePostingForm from "./Page/Course/Courses";
import Profile from "./components/Profile/Profile";
import AdminLogin from "./Page/admin/adminLog";
import CartPage from "./Page/AddToCart/AddCart";
import DisplayCart from "./Page/AddToCart/DisplayCart";
import BillingPage from "./Page/checkout/checkout";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/course" element={<CoursePostingForm />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route path="/adminLog" element={<AdminLogin />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="displaycart" element={<DisplayCart />} />
          <Route path="checkout" element={<BillingPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
