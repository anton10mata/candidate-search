import React from "react";
import { User } from "../services/githubApi";

interface CandidateCardProps {
  candidate: User;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate }) => {
  return (
    <div
      style={{
        backgroundColor: "#222",
        color: "white",
        padding: "20px",
        borderRadius: "10px",
        maxWidth: "400px",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <img
        src={candidate.avatar_url}
        alt="avatar"
        style={{ width: "100px", borderRadius: "50%", marginBottom: "10px" }}
      />
      <h2>{candidate.login}</h2>
      <p>Location: {candidate.location || "Not provided"}</p>
      <p>Email: {candidate.email || "Not provided"}</p>
      <p>Company: {candidate.company || "Not provided"}</p>
      <p>{candidate.bio || "No bio available"}</p>
    </div>
  );
};

export default CandidateCard;

