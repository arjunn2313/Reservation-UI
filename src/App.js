import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/hotel";
import Login from "./components/login/Login";
import CreateAccount from "./pages/createAccount/CreateAccount";

   

function App() {
  return (
     <>
     <Routes>
      <Route exact path="/"  element={<Home/>}></Route>
      <Route exact path="/register"  element={<CreateAccount/>}></Route>
      <Route exact path="/login" element={<Login/>}></Route>
      <Route exact path="/hotels"  element={<List/>}></Route>
      <Route exact path="/hotels/:id" element={<Hotel/>}></Route>
     </Routes>
     </>
     
  );
}

export default App;
