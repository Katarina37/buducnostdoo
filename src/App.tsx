import { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes, useLocation } from "react-router-dom";
import { business as b } from "./data";
import Home from "./pages/Home";
import Icon from "./components/Icon";
import OpenNow from "./components/OpenNow";

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // mali odmak da se stranica stigne iscrtati nakon promjene rute
      const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView(), 30);
      return () => clearTimeout(t);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="topbar-in">
          <span className="topbar-hours">
            <Icon name="clock" size={15} /> Pon–Pet 08–19h · Sub 08–17h
          </span>
          <span className="topbar-ship">
            <Icon name="truck" size={15} /> Online prodaja · poštarina {b.shipping}
          </span>
          <a className="topbar-phone" href={b.phoneHref}>
            <Icon name="phone" size={15} /> {b.phone}
          </a>
        </div>
      </div>

      <div className="nav">
        <Link to="/" className="brand" onClick={close}>
          {b.logo ? <img src={b.logo} alt="" /> : <span className="logo-dot" aria-hidden />}
          <span className="brand-text">
            <span className="brand-name">Budućnost</span>
            <small>sve za domaćinstvo i ugostiteljstvo</small>
          </span>
        </Link>

        <nav aria-label="Glavni meni" className={open ? "open" : ""}>
          <Link to="/#asortiman" onClick={close}>Asortiman</Link>
          <Link to="/#metalac" onClick={close}>Metalac</Link>
          <Link to="/#ugostiteljstvo" onClick={close}>Ugostiteljstvo</Link>
          <Link to="/#kontakt" onClick={close}>Kontakt</Link>
          <Link className="btn small accent nav-call" to="/#kontakt" onClick={close}>
            <Icon name="mail" size={16} /> Pošalji upit
          </Link>
        </nav>

        <button
          className="burger"
          aria-label={open ? "Zatvori meni" : "Otvori meni"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} size={26} />
        </button>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          {b.logo && <img src={b.logo} alt="" />}
          <p className="footer-name">Budućnost</p>
          <p className="footer-tag">{b.tagline}. Direktni uvoznik Metalac posuđa.</p>
          <OpenNow />
        </div>
        <div>
          <h4>Meni</h4>
          <Link to="/#asortiman">Asortiman</Link>
          <Link to="/#metalac">Metalac</Link>
          <Link to="/#ugostiteljstvo">Ugostiteljstvo</Link>
          <Link to="/#kontakt">Kontakt</Link>
        </div>
        <div>
          <h4>Radno vrijeme</h4>
          {b.hours.map((h) => (
            <p key={h.day} className="footer-hours">
              <span>{h.day}</span>
              <strong>{h.time}</strong>
            </p>
          ))}
        </div>
        <div>
          <h4>Kontakt</h4>
          <a href={b.mapHref} target="_blank" rel="noreferrer" className="footer-line">
            <Icon name="pin" size={18} /> {b.address}
          </a>
          <a href={b.phoneHref} className="footer-line">
            <Icon name="phone" size={18} /> {b.phone}
          </a>
          <a href={`mailto:${b.email}`} className="footer-line">
            <Icon name="mail" size={18} /> {b.email}
          </a>
          <div className="footer-social">
            <a href={b.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <Icon name="instagram" />
            </a>
            <a href={b.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <Icon name="facebook" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copy">
        <span>© {new Date().getFullYear()} {b.name} · Sva prava zadržana</span>
        <span>Bijeljina, Republika Srpska</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
