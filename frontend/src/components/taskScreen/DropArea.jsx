import React, { useState } from "react";
const DropArea = ({ onDrag }) => {
  const [showDrop, setShowDrop] = useState(false);

  const handleDragOver = (event) => {
    event.preventDefault();
    setShowDrop(true);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setShowDrop(false);
    onDrag(event); // Aufruf von onDrag ohne Argumente macht keinen Sinn. Du musst das Event behandeln.
  };

  return (
    <div
      onDragEnter={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDrag={() => {
        onDrag();
        setShowDrop(false);
      }}
      className={`border ${
        showDrop ? "border-green-400" : "border-transparent"
      } w-full h-24 flex justify-center items-center`} // h-24 ist ein Beispiel, passe die Höhe nach Bedarf an
    >
      {showDrop && <section className="text-gray-500">Drop here</section>}
    </div>
  );
};

export default DropArea;
