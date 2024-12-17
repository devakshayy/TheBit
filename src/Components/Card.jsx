import { Link } from "react-router-dom";

const Card = ({ language, description, subject, color, id }) => {
  return (
    <div
      style={{
        backgroundColor: `${color}`,
        boxShadow: "10px 10px 6px rgba(0, 0, 0, 0.2)",
      }}
      className="card-container"
    >
      {/* first div */}
      <div className="h-[25px] flex justify-between items-center">
        <div className="card-language">
          <p className="text-[12px] tracking-wide ">{language}</p>
        </div>
        <div className="card-count-circle">
          <p className="text-[14px]  font-semibold">{id + 1}</p>
        </div>
      </div>
      {/* second div */}
      <div className="card-content">
        <h1 className="text-xl font-bold">{subject}</h1>
        <p className="text-[13px]">{description}</p>
      </div>
      {/* third div */}
      <div className="card-footer">
        <Link to={`/questionshub/${subject}`}>
          <button className="card-btn">Questions</button>
        </Link>
        <Link to={`/answershub/${subject}`}>
          <button className="card-btn">Answers</button>
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
