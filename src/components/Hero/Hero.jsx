import "./Hero.css";
import ArrowDownIcon from "./ArrowDownIcon";
import LogoIconSvg from "./LogoIconSvg";

export default function Hero() {
  return (
    <section
      className="hero"
      aria-label="Волна — это вкус, достойный вашего стола"
    >
      <div className="container">
        <header className="container siteHeader">
          <div className="headerRow">
            <button className="headerBtn" type="button">
              Меню
            </button>
            <a href="/" className="logo">
              <LogoIconSvg />
            </a>
            <a href="/cart" className="headerLink">
              Корзина
            </a>
          </div>
        </header>

        <div className="heroInner">
          <div className="heroBody">
            <h1 className="heroTitle">Волна — это не просто рыба.  <br /> Это вкус, достойный вашего стола.</h1>
            <a className="cta" href="#collection">
              Выбрать вкус
            </a>
          </div>
        </div>

        <div className="container heroContacts">
          <div className="contactsRow">
            <a className="contact contact--left" href="tel:+79257712240">
              +7 (925) 771-22-40
            </a>
            <a href="#collection" className="anchorBtn" aria-label="Листать вниз">
              <ArrowDownIcon />
            </a>
            <a className="contact contact--right" href="mailto:info@volna.com">
              info@volna.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}