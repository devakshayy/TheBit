import { Link } from "react-router-dom";

const Card = ({language,description,subject,color}) => {
 
  return (
    <div style={{backgroundColor:`${color}`}} className=" flex flex-col justify-between w-[320px]  sm:w-[220px]  h-[240px] rounded-xl px-2 py-3">
    {/* first div */}
    <div className="h-[25px] flex justify-between items-center">
      <div className="bg-white w-[80px] h-full rounded-xl flex justify-center items-center">
        <p className="text-[12px]">{language}</p>
      </div>
      <div className="w-[25px] h-[25px] bg-white rounded-full flex justify-center items-center">
        <span className="text-[12px] font-semibold">8</span>
      </div>
    </div>
    {/* second div */}
    <div className="border-b-2 pb-2 text-white">
      <h1 className="text-xl font-bold">{subject}</h1>
      <p className="text-[13px]">{description}</p>
    </div>
    {/* third div */}
    <div className="h-[35px] flex  justify-between place-items-center">
       <Link to={`/questionshub/${subject}`} >
        <button  className="bg-white w-[90px] rounded-xl h-full flex items-center text-[15px] justify-center p-2">
          Questions
        </button>
       </Link>
       <Link to={`/answershub/${subject}`} >
        <button className="bg-white w-[90px] rounded-xl h-full flex items-center text-[15px] justify-center p-2">
          Answers
        </button>
       </Link>
    </div>
  </div>
  );
};

export default Card;


// sm: => 640px and up (minimum width: 640px)
// md: => 768px and up (minimum width: 768px)
// lg: => 1024px and up (minimum width: 1024px)
// xl: => 1280px and up (minimum width: 1280px)
// 2xl: => 1536px and up (minimum width: 1536px)