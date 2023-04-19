import React, { useState, useEffect } from "react";

const Typewriter = ({ text }) => {
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setCurrentText((prev) => prev + text[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 20);

    return () => {
      clearInterval(intervalId);
    };
  }, [text]);

  return <div>{currentText}</div>;
};

export default Typewriter;