import React from 'react'

const QuestionBtn = ({onClick,children}) => {
  return (
     <button 
         onClick={onClick}
         className='qus-btn'
     >
       {children}
     </button>
  )
}

export default QuestionBtn

