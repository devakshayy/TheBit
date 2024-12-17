import { Link } from "react-router-dom";

const Card = ({language,description,subject,color,id}) => {

  return (
    <div style={{backgroundColor:`${color}`,
                 boxShadow: '10px 10px 6px rgba(0, 0, 0, 0.2)'}} 
                 className=" flex flex-col justify-between w-[320px]  sm:w-[220px]  h-[240px] rounded-xl px-2 py-3 ">
    {/* first div */}
    <div className="h-[25px] flex justify-between items-center">
      <div className="bg-white w-[80px] h-full rounded-xl flex justify-center items-center shadow-inner shadow-slate-700">
        <p className="text-[12px] tracking-wide ">{language}</p>
      </div>
      <div className="w-[25px] h-[25px] bg-white rounded-full flex justify-center items-center shadow-inner shadow-current">
        <p className="text-[14px]  font-semibold">{id+1}</p>
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
        <button  className="bg-white hover:translate-y-0.5 hover:font-bold transform transition hover:bg-slate-100 ease-out sm:duration-300 tracking-wider w-[93px] rounded-xl h-full flex items-center text-[15px] text-center shadow-inner shadow-black justify-center p-2  ">
          Questions
        </button>
       </Link>
       <Link to={`/answershub/${subject}`} >
        <button className="bg-white hover:translate-y-0.5 hover:font-bold transform transition hover:bg-slate-100 ease-out sm:duration-300  tracking-wider w-[93px] rounded-xl h-full flex items-center text-[15px] text-center shadow-inner shadow-black justify-center p-2 ">
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