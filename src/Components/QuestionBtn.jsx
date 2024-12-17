import React from 'react'

const QuestionBtn = ({onClick,children}) => {
  return (
     <button 
         onClick={onClick}
         className='min-w-[140px] min-h-[50px] bg-[#007BFF] p-2 text-white font-bold rounded-[15px] shadow-sm ease-in duration-300 hover:bg-white hover:text-[#007BFF] border-2 border-[#007BFF] hover:shadow-2xl hover:shadow-[#007BFF] hover:translate-y-0.5 hover:font-bold transform transition'
     >
       {children}
     </button>
  )
}

export default QuestionBtn

