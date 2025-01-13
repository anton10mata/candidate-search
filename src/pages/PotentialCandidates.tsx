import React, { useEffect, useState } from "react";
import CandidateTable from "../components/CandidateTable";

const PotentialCandidates: React.FC = () => {
  const [candidates, setCandidates] = useState<any[]>([]);

  useEffect(() => {
    const savedCandidates = JSON.parse(localStorage.getItem("candidates") || "[]");
    setCandidates(savedCandidates);
  }, []);

  return (
    <div style={{ padding: "20px", backgroundColor: "#1A1A40", color: "white" }}>
      <h1>Potential Candidates</h1>
      <CandidateTable candidates={candidates} />
    </div>
  );
};

export default PotentialCandidates;
