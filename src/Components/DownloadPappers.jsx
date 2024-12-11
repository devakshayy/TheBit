import React from "react";
import { papers } from "../data/papers";

const DownloadPapers = () => {
  const handleDownload = (fileName) => {
    const fileUrl = `${import.meta.env.BASE_URL}${fileName}`;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName.split("/").pop(); // Extract the actual file name
    link.click();
  };

  return (
    <div>
      <h1>Download Question Papers</h1>
      {papers.map((paper) => (
        <button
          className="border border-black m-5 p-1 rounded-md"
          key={paper.year}
          onClick={() => handleDownload(paper.fileName)}
        >
          Download {paper.year} Paper
        </button>
      ))}
    </div>
  );
};

export default DownloadPapers;
