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
            // console.log('BASE_URL:', import.meta.env.BASE_URL);
          };
          
    return (
        <div className="qusandAnsList-container">
                <div className='answerList-container-heading'>
                      <p>SSLC {sub} Answer Pappers ({answersList.length})</p>        
                </div>
                <div className='grid gap-4 sm:gap-14
                                lg:gap-18 grid-cols-2 
                                sm:grid-cols-3 lg:grid-cols-4 
                                p-2'>
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
