import React,{useState, useEffect} from 'react'
import Crown from './assets/Golden-Princess-Crown-PNG-Photos.png'
import Footer from './ui/Footer'
import { socket } from './Connection/Socket';
import { useParams } from "react-router-dom";



function Gamestart(props) {

const [Welcome, SetWelcome] = useState('');
  const [userRedirect, setuserRedirect] = useState(false);
  const [opponentJoinsGame, SetopponentJoin] = useState(false);
  const [opponentName, SetopponentName] = useState('');

  
  const {gameId} = useParams()

  const [Initializor, setInitializor] = useState('');

  const Domaine = 'http://localhost:3000/game/';


  
  socket.emit('join Game Room', { gameId, Initializor });
  
  socket.on('Welcome', (data) => {
    SetWelcome(data.message);
  })
 



  socket.on('receive_name', (data) => {
    setInitializor(data.Name);
  })

    return (
      <div>
        <div className='bg-gradient-to-l from-[#261e1a]  to-[#8d5031] w-[100vw] text-red-900 h-[100vh] pt-[20px]  font-poppins '>
          <div className='flex'>
            <img alt='une courone pour mon logo' src={Crown}  className =' w-[10%] h-[20%] relative bottom-[] right-[ ]'/>
          <span className='text-[5vw] font-bold text-[#f1793c] font-poppins relative top-[] left-[]'>Crown <span className='text-[#e5cabc]'>Chess</span>  Game </span>
          </div>
          <div>
              <span className='text-[#261e1a] text-[19px] relative left-[12vw] top-[2vh] p-[10px]'>
                  Welcome to <span className='text-[#f1793c]'>Crown Chess </span> . 
                  Made with ❤️ by Franck Tamwo . <br /> Follow me on Github : <u><a href='https://github.com/ValereTamwo' className='text-white '>https://github.com/ValereTamwo</a> </u> <br /> 
                  Follow me on Linkedin : <u><a href='https://www.linkedin.com/in/valere-tamwo-748896229/' className='text-white '>https://www.linkedin.com/in/valere-tamwo-748896229/</a> </u>
              </span>

              <p className='text-[#261e1a] text-[19px] relative left-[12vw] top-[10vh] p-[10px]'>
                  Copy the the Link below and Send it to your friend to start the game 👇
              </p>
            <div className='h-[40px] w-[50vw] bg-[#e5cabc] rounded-[10px] p-[7px] ml-[12vw] mt-[12vh] text-full overflow-scroll'> { Domaine + gameId }</div>
            <p className='text-[#f1793c] relative top-[10vh] left-[10vw]'>Initializor Game Session : {Initializor}</p> 
            <p className='text-[#f1793c] relative top-[10vh] left-[10vw]'>Welcome Game Session : {Welcome}</p> 

          </div>
                <Footer />
        </div>
            
      </div>
    
  )
}

export default Gamestart