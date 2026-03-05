import React, { useState } from "react";

function ProfileCard({ name, role, image, bgColor }) {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    width: "250px",
    padding: "20px",
    borderRadius: "12px",
    backgroundColor: bgColor,
    textAlign: "center",
    transition: "0.3s",
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    boxShadow: isHovered
      ? "0 8px 20px rgba(0,0,0,0.2)"
      : "0 2px 8px rgba(0,0,0,0.1)",
    cursor: "pointer"
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "15px"
        }}
      />

      <h2>{name}</h2>
      <p>{role}</p>

      <button
        style={{
          padding: "8px 15px",
          marginTop: "10px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Follow
      </button>
    </div>
  );
}

export default ProfileCard;