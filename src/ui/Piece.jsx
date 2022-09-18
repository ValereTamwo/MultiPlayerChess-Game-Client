import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

function Piece(props) {

  const chooseColor = props.isWhite ? 0 : 1;
  const [image] = useImage(props.imgurl[chooseColor]);

  

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
    <Image image={image} 
      x={props.x - 90}
      y={props.y - 90}
      draggable={true}
      width={70}
      height={70}
      onDragStart={props.onDragStart}
      fill={props.check && 'red'}
      id={props.id}
    />
  )
}

export default Piece