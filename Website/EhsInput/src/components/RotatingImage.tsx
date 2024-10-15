import React, { useState } from "react";

interface inputProp {
  isRotated: boolean;
  setRotated: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function RotatingImage({ isRotated, setRotated }: inputProp) {
  // State to keep track of the rotation angle

  // Toggle rotation between 0 and 90 degrees
  const handleImageClick = () => {
    setRotated(!isRotated);
  };

  return (
    <div>
      <img
        className="rotatingimg"
        src="chevronleft.png" // Pfad zu deinem Bild
        alt="Chevron by Dave Gandy"
        onClick={handleImageClick}
        style={{
          transform: isRotated ? "rotate(-90deg)" : "rotate(0deg)",
          transition: "transform 0.5s ease", // Smooth rotation
          cursor: "pointer", // Zeigt an, dass das Bild klickbar ist
        }}
      />
    </div>
  );
}
