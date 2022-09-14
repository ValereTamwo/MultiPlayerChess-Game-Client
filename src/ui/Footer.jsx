import React from 'react'
import Copy from '../assets/1024px-Copyright.svg.png'
import Lin from '../assets/lin.png';
import Git from '../assets/Github.png'

function Footer() {
  return (
      <div className='w-[screen] h-[9vh] bg-[#261e1a] mt-[] p-[10px] pt-[1%] items-center relative top-[34.7vh]'>
          <span className='flex text-[#f1793c]'> CopyRight <img alt='' src={Copy} className='w-[20px] h-[20px] mr-[5px]' /> 2022 Valere Tamwo</span> 
          <div className='flex items-end justify-end relative bottom-[30px] gap-8 '>
              <img alt='' src={Git} className ='w-[40px] h-[40px]' />
              <img alt='' src={Lin} className = 'w-[40px] h-[40px] '/>
          </div>
    </div>
  )
}

export default Footer