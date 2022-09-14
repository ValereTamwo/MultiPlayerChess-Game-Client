import React, { useState } from 'react'
import Game from '../models/Chess'

function Chessgame(props) {

    const [gameState, setGameStat] = useState(new Game(props.isWhite));
    const [whitekingInCheck, setWhiteKIngInCheck] = useState(false);
    const [blackkingInCheck, setBlackKIngInCheck] = useState(false);


    const movePiece = (selectedId,finalPosition) => {

        /**
         * use pythgorean theorem to calculate
         * the distance between the final position  of th chess piece and every Square on the board , 
         * and assign the piece to the closest square
         */
    }

  return (
        /**
         * <div>
         *      <stage>
         *           <layer for loop model and render it > // to render pieces 
         *  </div>
         */
      <div>
          
      </div>
  )
}

export default Chessgame