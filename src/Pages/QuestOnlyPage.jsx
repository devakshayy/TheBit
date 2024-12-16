import React from "react";
import { questions } from "../data/questions";

const QuestOnlyPage = () => {

  const handleDownload = (fileName) => {
    const fileUrl = `${import.meta.env.BASE_URL}${fileName}`;
    const link = document.createElement("a");
    link.href = fileUrl;
    // link.target = '_blank'
    link.download = fileName.split("/").pop(); // Extract the actual file name
    link.click();
  };

  return (
    <div className="mx-auto px-4 py-6 flex flex-col justify-center gap-4 items-center">
      <div className="min-w-[300px] min-h-[60px] sm:min-w-[600px] md:min-w-[720px] lg:min-w-[1000px] p-2 text-lg sm:text-2xl flex justify-center text-center items-center font-extrabold bg-[#003366] rounded-[15px] text-white">
        <p>All Question Papers</p>
      </div>
      <div className="grid gap-4 sm:gap-14 lg:gap-18 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 p-2">
        {Object.entries(questions).map(([subject, years]) => (
          <div key={subject} style={{ marginBottom: "20px" }}>
            <details>
              <summary style={{ cursor: "pointer", fontSize: "23px" }}>
                {subject}
              </summary>
              <ul style={{ listStyle: "none", padding: "10px 0" }}>
                {years.map((qust) => (
                  <li key={qust.year} style={{ margin: "5px 0" }}>
                    <button
                      onClick={() => handleDownload(qust.fileName)}
                      style={{
                        background: "none",
                        border: "none",
                        textDecoration: "underline",
                        color: "blue",
                        cursor: "pointer",
                      }}
                    >
                      {qust.year}
                    </button>
                  </li>
                ))}
              </ul>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestOnlyPage;
