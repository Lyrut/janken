import "./scss/nav.scss";

import { IconContext } from "react-icons";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

function Nav(props) {
  let lives_player1 = [true, true, false];
  let lives_player2 = [true, true, false];

  const player1_heart = lives_player1.map((data, i) => {
    return (
      <IconContext.Provider value={{ size: 24, className: "heart" }} key={i}>
        {data ? <FaHeart /> : <FaRegHeart />}
      </IconContext.Provider>
    );
  });
  const player2_heart = lives_player2.map((data, i) => {
    return (
      <IconContext.Provider value={{ size: 24, className: "heart" }} key={i}>
        {data ? <FaHeart /> : <FaRegHeart />}
      </IconContext.Provider>
    );
  });

  return (
    <div className="navbar">
      <div className="left">
        <div className="name">{props.Player1}</div>
        <div className="hearts">{player1_heart}</div>
      </div>
      <div className="right">
        <div className="name">{props.Player2}</div>
        <div className="hearts">{player2_heart}</div>
      </div>
    </div>
  );
}

export default Nav;
