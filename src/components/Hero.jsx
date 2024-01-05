import Header from "./Header";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="hero">
      <Header />
      <div className="hero__content">
        <h1 className="hero__heading">Data <span className="hero__heading--underline">tailored</span> to your needs.</h1>
        <Button className="hero__btn--primary">Learn more</Button>
        <img className="hero__illustration--left" src="/assets/images/bg-pattern-1.svg" alt="spiral illustrations" />
        <img className="hero__illustration--right" src="/assets/images/bg-pattern-2.svg" alt="spiral illustrations" />
      </div>
    </div>
  );
};

export default Hero;
