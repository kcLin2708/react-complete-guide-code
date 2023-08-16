import React, { useCallback, useState } from "react";

import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";
import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log("APP RUNNUNG!");

  const toggleParagraphHandler = useCallback(() => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  }, []); //setShowParagraph has no dependency!!!

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput />
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
