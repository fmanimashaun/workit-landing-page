const Footer = () => {
  return (
    <footer className="footer">
      <img
        className="footer__logo"
        src="assets/images/logo-dark.svg"
        alt="logo"
      />
      <ul className="footer__social-media">
        <li>
          <img src="assets/images/icon-facebook.svg" alt="Facebook icon" />
        </li>
        <li>
          <img src="assets/images/icon-twitter.svg" alt="Twitter icon" />
        </li>
        <li>
          <img src="assets/images/icon-instagram.svg" alt="Instagram icon" />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
