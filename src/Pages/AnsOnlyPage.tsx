import React from "react";
import { answers } from "../data/answers";
const AnsOnlyPage = () => {

  const handleDownload = (fileName) => {
    const fileUrl = `/${fileName}`; 
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName.split("/").pop(); 
    link.click();
  };

  return (
    <div className="mx-auto px-4 py-6 flex flex-col justify-center gap-4 items-center">
      <div className="min-w-[300px] min-h-[60px] sm:min-w-[600px] md:min-w-[720px] lg:min-w-[1000px] p-2 text-lg sm:text-2xl flex justify-center text-center items-center font-extrabold bg-[#003366] rounded-[15px] text-white">
        <p> All Answer Papers</p>
      </div>
      <div className="grid gap-4 sm:gap-14 lg:gap-18 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 p-2">
        {Object.entries(answers).map(([subject, years]) => (
          <div key={subject} style={{ marginBottom: "20px" }}>
            <details>
              <summary style={{ cursor: "pointer", fontSize: "23px" }}>
                {subject}
              </summary>
              <ul style={{ listStyle: "none", padding: "10px 0" }}>
                {years.map((ans) => (
                  <li key={ans.year} style={{ margin: "5px 0" }}>
                    <button
                      onClick={() => handleDownload(ans.fileName)}
                      style={{
                        background: "none",
                        border: "none",
                        textDecoration: "underline",
                        color: "blue",
                        cursor: "pointer",
                      }}
                    >
                      {ans.year}
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

export default AnsOnlyPage;
