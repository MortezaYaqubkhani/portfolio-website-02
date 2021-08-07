import "./menu.scss";

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={"menu " + (menuOpen && "active")}
      onMouseLeave={() => setMenuOpen(false)}
    >
      <ul className="a">
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">Potrfolio</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#testimonials">Skills</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contac</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
