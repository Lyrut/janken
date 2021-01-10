import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./home.scss";

import Input from "../tools/Input";
import Button from "../tools/Button";

import { IconContext } from "react-icons";
import { FaChevronRight } from "react-icons/fa";

function Home(props) {
  const [showJoinInput, setShowJoinInput] = useState(false);
  const faChevronRight = (
    <IconContext.Provider value={{ size: 24, className: "chevron" }}>
      <FaChevronRight />
    </IconContext.Provider>
  );

  return (
    <div className="home">
      <div className="name">
        <Input Name="name" LabelName="Nom" Type="text" />
      </div>

      <div className="game-creation">
        <Button Color="" Label="Créer" />
        <Button
          Color=""
          Label="Rejoindre"
          onClick={() => setShowJoinInput(true)}
        />
      </div>
      {showJoinInput && (
        <div className="joinCode">
          <Input Name="code" Type="text" Class="code" />
          <Link to="/game">
            <Button
              Type="button"
              Label={faChevronRight}
              Class="validate-code"
              onClick={props.ShowGame}
            />
          </Link>
        </div>
      )}
    </div>
  );
}

export default Home;
