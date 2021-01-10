import React from "react";

import "./scss/input.scss";

function Input(props) {
  const inputType =
    props.Type != null && props.Type !== "" ? " input-" + props.Type : "";

  const otherClass =
    props.Class != null && props.Class !== ""
      ? inputType + " " + props.Class
      : inputType;

  const label =
    props.LabelName != null && props.LabelName !== "" ? (
      <label htmlFor={props.Name} className="label">
        {props.LabelName}
      </label>
    ) : null;

  return (
    <>
      {label}
      <input
        type={props.Type}
        name={props.Name}
        className={"input" + otherClass}
        value={props.Value}
        onChange={props.OnChange}
        required
      ></input>
    </>
  );
}

export default Input;
