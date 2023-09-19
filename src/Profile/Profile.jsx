import "./profile.css";

function Profile() {
  return (
    <div id="profile" className="profile-div">
      <div>
        <a href="#" className="button button-home">
          CV <i className="fa-solid fa-download"></i>
        </a>
      </div>
      <div className="profile-text">
        <p className="white">
          Âgée de 20 ans, je suis actuellement étudiante de deuxième année au
          sein du <span>BTS communication</span> du lycée Auguste & Jean Renoir
          à Angers.
        </p>
        <p className="white">
          Ma formation collabore chaque année avec des entreprises pour
          lesquelles nous sommes chargés de répondre à leurs besoins de
          communication. Ces projets amènent à acquérir plusieurs expériences
          concrètes ainsi que de nombreuses{" "}
          <span className="border-bottom">
            <a href="#skills" className="violet">
              compétences
            </a>
          </span>
          .
        </p>
        <p className="white">
          J’ai aussi réalisé deux stages qui m’ont permis d’être en immersion
          dans le monde du travail et de la communication. J’ai effectué mon
          premier stage à la <span>Cour d’appel d’Angers</span> pour une durée
          de 8 semaines, et mon second dans l’agence de communication{" "}
          <span>Angers ça Bouge</span> durant 6 semaines.
        </p>
        <p className="white">
          Si vous souhaitez en savoir davantage sur moi ou sur mon parcours, je
          vous invite à découvrir les{" "}
          <span className="border-bottom">
            <a href="#projects" className="violet">
              projets
            </a>
          </span>{" "}
          que j’ai réalisés ou à me contacter !
        </p>
      </div>
    </div>
  );
}

export default Profile;
