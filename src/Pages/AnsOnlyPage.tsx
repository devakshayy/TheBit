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
    <div className="mx-auto px-4 py-6 flex flex-col
                    justify-center gap-4 items-center">
      <div className="answerOnlyPage-heading">
        <p> All Answer Papers</p>
      </div>
      <div className="grid gap-4 sm:gap-14 lg:gap-18
                       grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 p-2">
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
