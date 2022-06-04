import "../styles/common.css";
import "../styles/HomePage.css";

export default function HomePage(params) {
  return (
    <>
      <section id="homepage">
        <div className="details">
          <strong id="dev_name">Nitin Kale</strong>

          <p id="dev_line">
            A tech enthusiastic, having knowledge and interest in <br />
            multiple programming languages and domains
          </p>

          <button className="button">Explore Projects ↓ </button>
          <button className="button2">Github Profile</button>
        </div>
      </section>
    </>
  );
}
