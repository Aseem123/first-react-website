import React from "react";

function SideSvg(props) {
  return (
    <>
      <div className={props.position}>
        <div className={props.circle}></div>
      </div>
    </>
  );
}

export default SideSvg;
