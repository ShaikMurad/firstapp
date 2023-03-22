import React from "react";
function ContentC(props) {
  const { heading = "", Description = "" } = props;
  return (
    <div>
      {<h1>{heading}</h1>}
      <p>{Description}</p>
    </div>
  );
}
export default ContentC;
