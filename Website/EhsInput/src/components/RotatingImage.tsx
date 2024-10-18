import React from "react";
import "../styles/app.css"

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
        className={`rotatingimg ${isRotated ? "rotateleft" : "rotateup"}`}
        src="chevronleft.png" // Pfad zu deinem Bild
        alt="Chevron by Dave Gandy"
        onClick={handleImageClick}
      />
    </div>
  );
}
