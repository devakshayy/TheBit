import React from 'react'

const AnswerBtn = ({onClick,children}) => {
  return (
    <button 
         onClick={onClick}
         className='min-w-[140px] min-h-[50px] bg-[#20C997] p-1 text-white font-bold rounded-[15px]'
     >
        {children}
     </button>
  )
}

export default AnswerBtn
