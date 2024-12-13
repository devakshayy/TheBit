import React from 'react'
import AnswerBtn from '../Components/AnswerBtn'

const AnswerListPage = () => {
    return (
        <div className="mx-auto px-4 py-6 flex flex-col justify-center gap-4 items-center">
                <div className='min-w-[300px] min-h-[60px] sm:min-w-[600px] md:min-w-[720px] lg:min-w-[1000px] p-2 text-lg sm:text-2xl flex justify-center text-center items-center font-extrabold bg-[#005F56] rounded-[15px] text-white'>
                      <p>Social Science Question Pappers</p>        
                </div>
                <div className='grid gap-4 sm:gap-14 lg:gap-18 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 p-2'>
                   <AnswerBtn/>
                   <AnswerBtn/>
                   <AnswerBtn/>
                   <AnswerBtn/>
                   <AnswerBtn/>
                   <AnswerBtn/>
                   <AnswerBtn/>
                   <AnswerBtn/>
                   <AnswerBtn/>
                   <AnswerBtn/>
                   <AnswerBtn/>
                   <AnswerBtn/>
                   <AnswerBtn/>
                </div>
               
         </div>
      )
}

export default AnswerListPage
