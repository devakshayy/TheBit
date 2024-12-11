import React from "react";

const Card = ({language,description,subject,color}) => {
  return (
    <div style={{backgroundColor:`${color}`}} className=" flex flex-col justify-between w-[180px] h-[200px] rounded-xl p-2">
    {/* first div */}
    <div className="h-[20px] flex justify-between items-center">
      <div className="bg-white w-[80px] h-[20px] rounded-md flex justify-center items-center">
        <p className="text-[12px]">{language}</p>
      </div>
      <div className="w-[20px] h-[20px] bg-white rounded-full flex justify-center items-center">
        <span className="text-[12px] font-semibold">8</span>
      </div>
    </div>
    {/* second div */}
    <div className="border-b-2 p-1 text-white">
      <h1 className="text-xl font-bold">{subject}</h1>
      <p className="text-[12px]">{description}</p>
    </div>
    {/* third div */}
    <div className="h-[30px] flex  justify-between place-items-center">
      <button className="bg-white w-[65px] rounded-md h-full flex items-center text-[13px] justify-center p-2">
        Questions
      </button>
      <button className="bg-white w-[65px] rounded-md h-full flex items-center text-[13px] justify-center p-2">
        Answers
      </button>
    </div>
  </div>
  );
};

export default Card;
