class Game{
    constructor(thisPayerIsPlayingAsWhite) {
        this.thisPayerIsPlayingAsWhite = thisPayerIsPlayingAsWhite; // boolean
        this.makeStartingBoard = this.makeStartingBoard();
    }

    makeStartingBoard() {
        // Make the board orientation for the current player
        if (this.thisPayerIsPlayingAsWhite) {
            // make the Chess orientation for White
        } else {
            // make chess orientation tailored for black
        }
    }

    movePiece(pieceId , to ) {
        //pieceId : String
        // to   :[x,y]
    }
}