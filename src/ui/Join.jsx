import React ,{useState} from 'react'
import Crown from '../assets/Golden-Princess-Crown-PNG-Photos.png'
import {socket,MySocketId} from '../Connection/Socket'

function Join() {

    const [opponentName ,SetopponentName] = useState(null)

  const SendName = () => {
    socket.emit('send Name', opponentName);
        document.location.href = '/join';
    }
    const OnChange = (event) => {
        console.log(event.target.value);
        SetopponentName(event.target.value);
    }

    return (
      <div>
        <div className='w-[50vw] h-[70vh] bg-[#261e1a] rounded-[10px] p-[10px]'>
          <div className='grid grid-flow-col'>
              <span className='text-[30px] font-bold text-[#f1793c] font-poppins relative top-[10%] left-[30%]'>Crown <span className='text-[#e5cabc]'>Chess</span>  Game </span>
              <img alt='une courone pour mon logo' src={Crown}  className = 'transform scale-[30%] relative bottom-[33%] right-[10% ]'/>
          </div>
          <div>
              <p className='text-[#f1793c] font-poppins text-[18px] relative bottom-[230px] left-[150px]'>Welcome Dear Player</p>
              <p className='text-[#f1793c] font-poppins text-[18px] relative bottom-[100px] left-[100px]'>Enter your Name to join an open game session <br /> or to to generate one</p>
              <input placeholder='Valere' id='name' className='bg-[#e5cabc] text-[#261e1a] rounded-[10px] font-poppins text-[18px] relative bottom-[90px] p-[10px] text-center left-[100px] h-[5vh]' required onChange={OnChange} />
              {opponentName}
          </div>
          <p>{MySocketId}</p> 
          <button className='w-[170px] rounded-[8px] relative left-[400px] h-[40px] items-center justify-center font-poppins  bottom-[20px]  flex bg-[#f1793c]' onClick={SendName}>send</button>
            </div>
        
    </div>
     
  )
}

export default Join 