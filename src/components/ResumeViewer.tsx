import React from "react";
import myResume from "@/assets//Resume/ARULKUMAR_CV.pdf"; // adjust path if needed

const ResumeViewer: React.FC = () => {
  return (
    <div className="w-full h-screen p-4">
      <h1 className="text-xl font-bold mb-4">My Resume</h1>
      <embed
         
        src={myResume}
        type="application/pdf"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default ResumeViewer;