import React from 'react'

const AnswerBtn = ({onClick,children}) => {
  return (
    <button 
         onClick={onClick}
         className='min-w-[140px] min-h-[50px] bg-[#20C997] p-2 text-white font-bold rounded-[15px] shadow-sm  ease-in duration-300 hover:bg-white hover:text-[#20C997] border-2 border-[#20C997] hover:shadow-2xl hover:shadow-[#20C997] hover:translate-y-0.5 hover:font-bold transform transition'
     >
        {children}
     </button>
  )
}

export default AnswerBtn
