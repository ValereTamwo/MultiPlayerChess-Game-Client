import React from 'react'
import {Image } from  'react-konva'

function Piece() {
    /**
     * imageUrl
     * color
     * id
     * -color of player
     * -Whether or not is your turn
     * -if this's player turn ,color of this player is the same color as the piece
     *      then we make this piece draggable 
     */
  return (
    <Image draggable/>
  )
}

export default Piece