class ChessPiece{
    constructor(name, id, isAttacked, color) {
        this.name = name; // stri ng
        this.color = color; // white ou black
        this.id = id;   //string
        this.isAttacked = isAttacked; // boolean
    }

    setSquare() {
        //asign this piece to a specific Squqre
        //this.square = square
    }

    getSquare() {
        //get the current square this is on
        //undefined if this piece is not on the board
    }
}