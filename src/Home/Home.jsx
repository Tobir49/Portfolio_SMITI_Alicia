import Nav from "../Nav/Nav.jsx";
import "./home.css";
import Profile from "../../public/profil.avif";

function Home() {
  return (
    <div>
      <Nav />
      <div className="home">
        <div className="home-text">
          <h1 className="white">
            Alicia Smiti <span className="violet">.</span>
          </h1>
          <p className="white secondary-title">
            étudiante en{" "}
            <span className="violet secondary-title">communication</span>
          </p>
        </div>
        <img src={Profile} alt="Alicia Smiti" className="profile-picture" />
      </div>
    </div>
  );
}

export default Home;
