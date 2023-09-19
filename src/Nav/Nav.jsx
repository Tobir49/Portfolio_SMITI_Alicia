import "./nav.css";

function Nav() {
  return (
    <nav>
      <div>
        <div>
          <ul>
            <li>
              <a href="#profile" className="white">
                Profil
              </a>
            </li>
            <li>
              <a href="#projects" className="white">
                Projets
              </a>
            </li>
            <li>
              <a href="#skills" className="white">
                Compétences
              </a>
            </li>
            <li>
              <a href="#xp" className="white">
                Stages
              </a>
            </li>
            <li>
              <a href="#contact" className="white">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
