import "./contact.css";

function Contact() {
  return (
    <article id="contact">
      <div className="one-contact">
        <i className="fa-solid fa-location-dot violet contact-icon"></i>
        <p className="white">Angers, 49100</p>
      </div>
      <div className="one-contact">
        <i className="fa-solid fa-mobile violet contact-icon"></i>
        <p className="white">06.73.85.23.04</p>
      </div>
      <div className="one-contact">
        <i className="fa-solid fa-envelope violet contact-icon"></i>
        <p className="white">aliciasmiti91@gmail.com</p>
      </div>
      <div className="one-contact">
        <a
          href="https://www.linkedin.com/in/alicia-smiti/"
          target="blank"
          className="violet contact-a"
        >
          <i className="fa-brands fa-linkedin contact-icon"></i>
          <span className="white">Alicia Smiti</span>
        </a>
      </div>
    </article>
  );
}

export default Contact;
