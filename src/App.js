import React, {useState,useCallback} from "react";
import { BrowserRouter,Navigate,Route,Routes } from "react-router-dom";
import Gamestart from "./Gamestart";
import Home from "./ui/Home";
import {socket,MySocketId} from './Connection/Socket'
import Chessgame from "./ui/Chessgame";
import { ColorContext } from "./context/ColorContext";

function App() {

//  const { didRedirect,playerDidRedirect,playerDidNotRedirect } = useContext(ColorContext);
      const [didRedirect, SetdidRedirect] = useState(false);

    const playerDidRedirect = useCallback(() => {
        SetdidRedirect(true)
    },[])

    const playerDidNotRedirect = useCallback(() => {
        SetdidRedirect(false);
    },[])

  return (
    <ColorContext.Provider value={{didRedirect: didRedirect, playerDidRedirect: playerDidRedirect, playerDidNotRedirect: playerDidNotRedirect}}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/join" element={<Gamestart />}></Route>

          <Route exact path='/game/:gameId'
            element=
            {
              <Gamestart isCreator={true} />
            }
          >
          </Route>
          
          <Route exact path ='/:params' element={<Navigate to = '/'/>} ></Route>
          <Route exact path="/chess" element={<Chessgame/>}></Route>
        </Routes>
        </BrowserRouter>
      </ColorContext.Provider>
  );
}

export default App;
