import React from "react";
import Text from "./components/Text";
import SideSvg from "./components/SideSvg";
import "./components/all.css";

function App() {
  return (
    <>
      <SideSvg position="top" circle="top-circle" />
      <Text />
      <SideSvg position="bottom" circle="bottom-circle" />
    </>
  );
}

export default App;
