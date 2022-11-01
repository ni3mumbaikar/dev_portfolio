import "../styles/common.css";
import "../styles/HomePage.css";
import side_circles from "../assets/images/side_circles.png";
import { ReactTerminal } from "react-terminal";

export default function HomePage(params) {
  const commands = {
    whoami: "ni3mumbaikar",
    cd: (directory) => `changed path to ${directory}`,
  };

  return (
    <>
      <section id="homepage">
        <div className="parent">
          <img src={side_circles} alt="" id="side_circles" />
          <div className="details">
            <strong id="dev_name">Nitin Kale</strong>

            <p id="dev_line">
              A tech enthusiastic, having knowledge and interest in <br />
              multiple programming languages and domains
            </p>

            <button className="button">Explore Projects ↓ </button>
            <button className="button2">Github Profile</button>
          </div>
        </div>
      </section>
    </>
  );
}
