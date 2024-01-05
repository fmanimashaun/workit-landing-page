import Button from "./Button";

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src="/assets/images/logo-light.svg" alt="workit logo" />
      <Button className="header__btn--secondary">Apply for access</Button>
    </header>
  );
};

export default Header;
