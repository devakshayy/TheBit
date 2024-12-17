import React from 'react'

const AnswerBtn = ({onClick,children}) => {
  return (
    <button 
         onClick={onClick}
         className='ans-btn'
     >
        {children}
     </button>
  )
}

export default AnswerBtn
