import React from "react";

import "./scss/button.scss";

function Button(props) {
  const buttonTypeName =
    props.TypeName != null && props.TypeName !== ""
      ? " button-" + props.TypeName
      : "";

  const otherClass =
    props.Class != null && props.Class !== ""
      ? buttonTypeName + " " + props.Class
      : buttonTypeName;

  return (
    <button
      type={props.Type}
      className={"button" + otherClass}
      onClick={props.onClick}
    >
      {props.Label}
    </button>
  );
}

export default Button;
