import React from 'react'
import QuestionBtn from '../Components/QuestionBtn'
import { useParams } from 'react-router-dom'
import { questions } from '../data/questions'

const QuestionListPage = () => {
   
  const {sub} = useParams()
  const questionsList = questions[sub];
  
  const handleDownloadQus = (fileName) => {
    const fileUrl = `${import.meta.env.BASE_URL}${fileName}`;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.target = '_blank'
   //  link.download = fileName.split("/").pop(); // Extract the og file name
    link.click();
   //  console.log('fileUrl:', fileUrl);
   //  console.log('fileName:',fileName);
  };

  
  return (
    <div className="qusandAnsList-container">
            <div className='questionList-container-heading'>
                  <p> {sub} Question Pappers ({questionsList.length})</p>        
            </div>
            <div className='grid gap-4 sm:gap-14 
                           lg:gap-18 grid-cols-2 sm:grid-cols-3
                            lg:grid-cols-4 p-2'>
               {questionsList.map((x,index)=> (
                  <QuestionBtn
                       key={index}
                       onClick={() => handleDownloadQus(x.fileName)}
                  >
                     { `${sub} ${x.year}` }
                  </QuestionBtn>
               ))}
            </div>
           
     </div>
  )
}

export default QuestionListPage
