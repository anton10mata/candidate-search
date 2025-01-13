import React from "react";
import { User } from "../services/githubApi";

interface CandidateTableProps {
  candidates: User[];
}

const CandidateTable: React.FC<CandidateTableProps> = ({ candidates }) => {
  const removeCandidate = (index: number) => {
    const updatedCandidates = [...candidates];
    updatedCandidates.splice(index, 1);
    localStorage.setItem("candidates", JSON.stringify(updatedCandidates));
    window.location.reload();
  };

  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        backgroundColor: "#333",
        color: "white",
        marginTop: "20px",
      }}
    >
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Location</th>
          <th>Email</th>
          <th>Company</th>
          <th>Bio</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {candidates.map((candidate, index) => (
          <tr key={index}>
            <td>
              <img
                src={candidate.avatar_url}
                alt="avatar"
                style={{ width: "50px", borderRadius: "50%" }}
              />
            </td>
            <td>{candidate.login}</td>
            <td>{candidate.location || "Not provided"}</td>
            <td>{candidate.email || "Not provided"}</td>
            <td>{candidate.company || "Not provided"}</td>
            <td>{candidate.bio || "No bio available"}</td>
            <td>
              <button
                onClick={() => removeCandidate(index)}
                style={{
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  padding: "5px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CandidateTable;
