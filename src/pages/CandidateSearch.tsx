import React, { useState, useEffect } from "react";
import CandidateCard from "../components/CandidateCard";
import { fetchCandidates, User } from "../services/githubApi";

const CandidateSearch: React.FC = () => {
  const [candidate, setCandidate] = useState<User | null>(null);

  useEffect(() => {
    fetchCandidates().then((candidates) => {
      if (candidates.length > 0) {
        setCandidate(candidates[0]);
      }
    });
  }, []);

  return (
    <div>
      <h1>Candidate Search</h1>
      {candidate ? (
        <CandidateCard candidate={candidate} />
      ) : (
        <p>No candidates found</p>
      )}
    </div>
  );
};

export default CandidateSearch;
