import Nav from "../Nav/Nav.jsx";
import "./home.css";
import picture from "../../public/profil.avif";
import Profile from "../Profile/Profile.jsx";
import Contact from "../Contact/Contact.jsx";
import Footer from "../Footer/Footer.jsx";

function Home() {
  return (
    <div id="profile">
      <Nav />
      <div className="home">
        <div className="home-text">
          <div>
            <h1 className="white">
              Alicia Smiti <span>.</span>
            </h1>
            <p className="white secondary-title">
              étudiante en{" "}
              <span className="secondary-title">communication</span>
            </p>
          </div>
          <a href="#" className="button button-home">
            Projets
          </a>
        </div>
        <img src={picture} alt="Alicia Smiti" className="profile-picture" />
      </div>
      <Profile />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
