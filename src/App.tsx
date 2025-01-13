import React, { useState, useEffect } from "react";
import CandidateCard from "./components/CandidateCard";
import CandidateTable from "./components/CandidateTable";
import { fetchCandidates, User } from "./services/githubApi";
import './styles.css';

const App: React.FC = () => {
  const [candidates, setCandidates] = useState<User[]>([]);
  const [currentCandidate, setCurrentCandidate] = useState<User | null>(null);

  useEffect(() => {
    // Fetch candidates or retrieve them from localStorage
    const storedCandidates = localStorage.getItem("candidates");
    if (storedCandidates) {
      const parsedCandidates = JSON.parse(storedCandidates);
      setCandidates(parsedCandidates);
      setCurrentCandidate(parsedCandidates[0] || null);
    } else {
      fetchCandidates().then((data) => {
        setCandidates(data);
        setCurrentCandidate(data[0] || null);
        localStorage.setItem("candidates", JSON.stringify(data));
      });
    }
  }, []);

  const handleAccept = () => {
    const updatedCandidates = candidates.slice(1);
    setCandidates(updatedCandidates);
    setCurrentCandidate(updatedCandidates[0] || null);
    localStorage.setItem("candidates", JSON.stringify(updatedCandidates));
  };

  const handleReject = () => {
    const updatedCandidates = candidates.slice(1);
    setCandidates(updatedCandidates);
    setCurrentCandidate(updatedCandidates[0] || null);
    localStorage.setItem("candidates", JSON.stringify(updatedCandidates));
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#161b22", minHeight: "100vh" }}>
      <h1 style={{ color: "#ffffff", textAlign: "center" }}>Candidate Search</h1>
      {currentCandidate ? (
        <div style={{ marginBottom: "20px" }}>
          <CandidateCard candidate={currentCandidate} />
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <button
              onClick={handleReject}
              style={{
                backgroundColor: "red",
                color: "white",
                border: "none",
                padding: "10px 20px",
                marginRight: "10px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Reject
            </button>
            <button
              onClick={handleAccept}
              style={{
                backgroundColor: "green",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Accept
            </button>
          </div>
        </div>
      ) : (
        <p style={{ color: "#ffffff", textAlign: "center" }}>No candidates to display!</p>
      )}
      <h2 style={{ color: "#ffffff", textAlign: "center", marginTop: "20px" }}>Potential Candidates</h2>
      <CandidateTable candidates={candidates} />
    </div>
  );
};

export default App;
