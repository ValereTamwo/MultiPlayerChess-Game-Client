import React, { useState } from 'react'
import Game from '../models/Chess'
import Board from '../assets/chessBoard.png'
import { Stage, Layer } from 'react-konva'

function Chessgame(props) {

    const [gameState, setGameStat] = useState(new Game(props.isWhite));
    const [whitekingInCheck, setWhiteKIngInCheck] = useState(false);
    const [blackkingInCheck, setBlackKIngInCheck] = useState(false);


    const movePiece = (selectedId,finalPosition) => {

        /**ww
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
    <>
      <div className=" w-[720px] h-[720px bg-[brown]" >
        <Stage className='w-[720px] h-[720px]'>
          <Layer>
            
          </Layer>
        </Stage>
      </div>
    </>
    
  )
}

export default Chessgame