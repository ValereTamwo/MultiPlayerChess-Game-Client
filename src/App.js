import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Gamestart from "./Gamestart";
import Home from "./ui/Home";
import {socket,MySocketId} from './Connection/Socket'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/join" element={<Gamestart />}></Route>
        <Route exact path='/game/:gameId'>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
