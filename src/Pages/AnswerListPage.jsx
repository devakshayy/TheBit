import React from 'react'
import AnswerBtn from '../Components/AnswerBtn'
import { useParams } from 'react-router-dom'
import { answers} from '../data/answers'


const AnswerListPage = () => {
       
      const  {sub} = useParams()
      const answersList = answers[sub]  
    

      const handleDownloadAns = (fileName) => {
            const fileUrl = `${import.meta.env.BASE_URL}${fileName}`;
            const link = document.createElement("a");
            link.href = fileUrl;
            link.target = '_blank'
            // link.download = fileName.split("/").pop(); // Extract the actual file name
            link.click();
          };
          
    return (
        <div className="mx-auto px-4 py-6 flex flex-col justify-center gap-4 items-center">
                <div className='min-w-[300px] min-h-[60px] sm:min-w-[600px] md:min-w-[720px] lg:min-w-[1000px] p-2 text-lg sm:text-2xl flex justify-center text-center items-center font-extrabold bg-[#005F56] rounded-[15px] text-white'>
                      <p> {sub} Answer Pappers ({answersList.length})</p>        
                </div>
                <div className='grid gap-4 sm:gap-14 lg:gap-18 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 p-2'>
                  {answersList.map((x,index) => (
                      
                      <AnswerBtn
                            key={index}
                            onClick={() => handleDownloadAns(x.fileName)}
                         >
                          { `${sub} ${x.year}` }
                      </AnswerBtn>
                  ))}     
                </div> 
         </div>
      )
}

export default AnswerListPage
