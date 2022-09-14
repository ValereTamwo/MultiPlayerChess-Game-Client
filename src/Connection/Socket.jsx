import  io from 'socket.io-client'

const socket = io.connect("http://localhost:3001");

let MySocketId;

socket.on('connection', (data) => {
    console.log('A new connection has been done to the game id :' +data.SocketId)
    MySocketId = data.SocketId;
})



export {
    MySocketId,
    socket
}