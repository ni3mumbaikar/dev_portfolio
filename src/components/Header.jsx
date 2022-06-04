import "../styles/common.css";

export default function Header(params) {
  return (
    <>
      <nav>
        <ul>
          <li className="active nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <a href="/">About</a>
          </li>
          <li className="nav-item">
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
