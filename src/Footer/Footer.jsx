import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <p className="white footer-text">© 2023 - Tous droits réservés</p>
        <div className="footer-icons">
          <a href="https://www.figma.com/file/pkq4EEbAkDmxdStAMg1k7A/Portfolio?type=design&node-id=108%3A114&mode=design&t=OjQ5kDPMUQRk8WSH-1">
            <i className="fa-brands fa-figma white"></i>
          </a>
          <a href="https://www.linkedin.com/in/alicia-smiti/">
            {" "}
            <i className="fa-brands fa-linkedin white"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
