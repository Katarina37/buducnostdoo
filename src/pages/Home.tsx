import { useRef } from "react";
import { Link } from "react-router-dom";
import { business as b, categories, featured, instaImages } from "../data";
import Img from "../components/Img";
import Icon from "../components/Icon";
import Reveal from "../components/Reveal";
import OpenNow from "../components/OpenNow";
import ContactForm from "../components/ContactForm";

function SectionHead({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <div className="head">
      <p className="eyebrow">
        <span>{eyebrow}</span>
      </p>
      <h2>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
}

function Featured() {
  const track = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.max(240, el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <section className="featured" aria-labelledby="izdvajamo-title">
      <div className="featured-in">
        <div className="featured-side">
          <p className="script">Izdvajamo</p>
          <h2 id="izdvajamo-title">Iz naše ponude</h2>
          <p>Mali izbor onoga što kupci najčešće traže. Za cijene i dostupnost pošaljite nam poruku.</p>
          <Link className="btn light" to="/#asortiman">
            Sav asortiman
          </Link>
        </div>

        <div className="featured-main">
          <button className="arrow prev" onClick={() => scroll(-1)} aria-label="Prethodni proizvodi">
            <Icon name="left" />
          </button>
          <div className="track" ref={track}>
            {featured.map((f) => (
              <article key={f.name} className="fcard">
                <div className="fcard-img">
                  <Img src={f.image} label={f.name} />
                </div>
                <small>{f.brand}</small>
                <h3>{f.name}</h3>
                <a className="btn small accent" href={b.instagramDm} target="_blank" rel="noreferrer">
                  Pošalji upit
                </a>
              </article>
            ))}
          </div>
          <button className="arrow next" onClick={() => scroll(1)} aria-label="Sljedeći proizvodi">
            <Icon name="right" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-text">
          <p className="hero-kicker">
            Bijeljina · direktni uvoznik Metalac posuđa
          </p>
          <h1>
            Sve za <b>domaćinstvo</b>
            <em>i ugostiteljstvo</em>
          </h1>
          <p className="hero-lead">
            Posuđe, šolje, kuhinjski aparati i dekor na jednom mjestu. Za vaš domaćinstvo ili ugostiteljstvo.
          </p>
          <div className="actions">
            <a className="btn accent" href="#asortiman">
              Pogledaj asortiman <Icon name="arrow" size={18} />
            </a>
            <a className="btn ghost" href={b.phoneHref}>
              <Icon name="phone" size={18} /> {b.phone}
            </a>
          </div>
          <OpenNow className="hero-open" />
        </div>

        <div className="hero-art">
          <div className="dots" aria-hidden="true" />
          <Img src={b.heroImage} label="Glavna slika (npr. posuđe na stolu)" className="hero-main" />
          <Img src={b.heroImage2} label="Druga slika (servis)" className="hero-sub hero-sub-a" />
          <Img src={b.heroImage3} label="Treća slika (dekor)" className="hero-sub hero-sub-b" />
          <div className="badge" aria-hidden="true">
            <span>Direktni uvoznik</span>
            <strong>Metalac</strong>
            <span>posuđa</span>
          </div>
        </div>
      </section>

      {/* ===== TRAKA PREDNOSTI ===== */}
      <ul className="strip" aria-label="Prednosti">
        <li>
          <Icon name="award" />
          <div>
            <strong>Direktni uvoznik</strong>
            <span>Metalac posuđa</span>
          </div>
        </li>
        <li>
          <Icon name="truck" />
          <div>
            <strong>Online prodaja</strong>
            <span>poštarina samo {b.shipping}</span>
          </div>
        </li>
        <li>
          <Icon name="store" />
          <div>
            <strong>Prodavnica u Bijeljini</strong>
            <span>{b.address}</span>
          </div>
        </li>
        <li>
          <Icon name="clock" />
          <div>
            <strong>Radimo i subotom</strong>
            <span>do 17h</span>
          </div>
        </li>
      </ul>

      {/* ===== ASORTIMAN ===== */}
      <section id="asortiman" className="section">
        <Reveal>
          <SectionHead
            eyebrow="Asortiman"
            title="Pronađite ono što tražite"
            lead="Za ponudu nam pošaljite poruku ili nas posjetite u prodavnici."
          />
        </Reveal>
        <div className="grid">
          {categories.map((c, i) => (
            <Reveal key={c.name} delay={(i % 4) * 70}>
              <div className={`cat cat-${i}`}>
                <span className="cat-img">
                  <Img src={c.image} label={c.name} className="round" />
                </span>
                <h3>{c.name}</h3>
                <p>{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== METALAC ===== */}
      <section id="metalac" className="metalac">
        <div className="metalac-inner">
          <Reveal className="metalac-art">
            <Img src={b.metalacImage} label="Metalac proizvod (PNG)" className="pot" />
            <Img src={b.metalacImage2} label="Metalac proizvod 2" className="pot2" />
          </Reveal>
          <Reveal className="metalac-card" delay={100}>
            <p className="eyebrow left">
              Direktni uvoznik
            </p>
            <h2>Metalac posuđe - kvalitet za svaku kuhinju</h2>
            <p>
              Kao direktni uvoznik Metalac posuđa, Budućnost d.o.o. nudi širok izbor kvalitetnog posuđa za domaćinstva i profesionalne kuhinje.
            </p>
            <ul className="ticks">
              <li>Emajlirano i inox posuđe</li>
              <li>Lonci, šerpe, tepsije i tiganji</li>
              <li>Kvalitetna rješenja za domaćinstva i ugostiteljske objekte</li>
            </ul>
            <a className="btn accent" href={b.instagram} target="_blank" rel="noreferrer">
              Pogledaj Metalac posuđe <Icon name="arrow" size={18} />
            </a>
          </Reveal>
        </div>
      </section>

      {/* ===== IZDVAJAMO ===== */}
      <Featured />

      {/* ===== ZA DOM / ZA UGOSTITELJE ===== */}
      <section id="ugostiteljstvo" className="audience">
        <div className="aud aud-home">
          <Reveal className="aud-art">
            <Img src={b.homeImage} label="Slika za dom" className="aud-img" />
          </Reveal>
          <Reveal className="aud-body" delay={100}>
            <p className="script">Za dom</p>
            <h3>Opremite kuhinju i trpezariju</h3>
            <p>Posuđe, servisi, šolje i aparati za svakodnevnu upotrebu i posebne prilike.</p>
            <ul className="aud-tags" aria-label="Šta nudimo za dom">
              <li>Metalac posuđe</li>
              <li>Servisi i šolje</li>
              <li>Poklon program</li>
              <li>Slavski program</li>
            </ul>
            <div className="aud-actions">
              <a href={b.instagramDm} target="_blank" rel="noreferrer" className="btn accent">
                Pošalji upit
              </a>
            </div>
          </Reveal>
        </div>

        <div className="aud aud-horeca">
        <Reveal className="aud-art">
          <Img src={b.horecaImage} label="Slika za ugostiteljstvo" className="aud-img" />
        </Reveal>
        <Reveal className="aud-body" delay={100}>
          <p className="script">Za ugostitelje</p>
          <h3>Restorani, kafići i hoteli</h3>
          <p>Direktni uvoznik, bez posrednika. Javite šta vam treba i pripremićemo ponudu prilagođenu vašem objektu.</p>
          <ul className="aud-tags" aria-label="Šta nudimo za ugostitelje">
            <li>Posuđe</li>
            <li>Čaše i staklo</li>
            <li>Servisi</li>
            <li>Escajg</li>
          </ul>
          <div className="aud-actions">
            <a href={b.instagramDm} target="_blank" rel="noreferrer" className="btn accent">
                Pošalji upit
              </a>
          </div>
        </Reveal>
      </div>
      </section>
      

      {/* ===== ZAŠTO BUDUĆNOST ===== */}
      <section className="section why">
        <Reveal>
          <SectionHead eyebrow="Zašto Budućnost" title="Zašto kupovati kod nas" />
        </Reveal>
        <div className="why-grid">
          {[
            { icon: "award", t: "Direktni uvoznik", d: "Metalac posuđe direktno od uvoznika, bez posrednika." },
            { icon: "box", t: "Online naručivanje", d: `Naručite putem Instagrama, Facebooka, mejla ili telefona. Poštarina ${b.shipping}.` },
            { icon: "store", t: "Prodavnica u Bijeljini", d: "Posjetite nas, pogledajte i isprobajte uz stručan savjet." },
            { icon: "utensils", t: "Za dom i ugostitelje", d: "Oprema za domaćinstvo i profesionalne kuhinje na jednom mjestu." },
          ].map((w, i) => (
            <Reveal key={w.t} className="why-item" delay={i * 70}>
              <span className="why-ico">
                <Icon name={w.icon} size={26} />
              </span>
              <h3>{w.t}</h3>
              <p>{w.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== INSTAGRAM ===== */}
      <section className="section insta-sec">
        <Reveal>
          <SectionHead eyebrow="Instagram" title={`Zapratite nas na @${b.instagramHandle}`} />
        </Reveal>
        <div className="insta">
          {instaImages.map((src, i) => (
            <a key={src + i} href={b.instagram} target="_blank" rel="noreferrer" className="insta-item">
              <img src={src} alt={`Budućnost na Instagramu ${i + 1}`} loading="lazy" />
              <span>
                <Icon name="instagram" size={26} />
              </span>
            </a>
          ))}
        </div>
        <p className="center">
          <a className="btn ghost" href={b.instagram} target="_blank" rel="noreferrer">
            <Icon name="instagram" size={18} /> Zapratite nas
          </a>
        </p>
      </section>

      {/* ===== KONTAKT ===== */}
      <section id="kontakt" className="section contact">
        <Reveal>
          <SectionHead
            eyebrow="Kontakt"
            title="Naručivanje i kontakt"
            lead="Narudžbe dogovaramo putem Instagrama, Facebooka, mejla ili telefona. Izaberite šta vam je najlakše."
          />
        </Reveal>

        <div className="contact-main">
          <aside className="contact-side">
            <h3>Javite nam se kako vam odgovara</h3>

            <ul className="side-list">
              <li>
                <a href={b.phoneHref}>
                  <span className="side-ico"><Icon name="phone" size={20} /></span>
                  <span><small>Telefon</small><strong>{b.phone}</strong></span>
                </a>
              </li>
              <li>
                <a href={`mailto:${b.email}`}>
                  <span className="side-ico"><Icon name="mail" size={20} /></span>
                  <span><small>Mejl</small><strong>{b.email}</strong></span>
                </a>
              </li>
              <li>
                <a href={b.instagramDm} target="_blank" rel="noreferrer">
                  <span className="side-ico"><Icon name="instagram" size={20} /></span>
                  <span><small>Instagram</small><strong>@{b.instagramHandle}</strong></span>
                </a>
              </li>
              <li>
                <a href={b.messenger} target="_blank" rel="noreferrer">
                  <span className="side-ico"><Icon name="facebook" size={20} /></span>
                  <span><small>Facebook</small><strong>Pošaljite poruku</strong></span>
                </a>
              </li>
              <li>
                <a href={b.mapHref} target="_blank" rel="noreferrer">
                  <span className="side-ico"><Icon name="pin" size={20} /></span>
                  <span><small>Prodavnica · {b.contactPerson}</small><strong>{b.address}</strong></span>
                </a>
              </li>
            </ul>

            <div className="side-hours">
              <h4><Icon name="clock" size={18} /> Radno vrijeme</h4>
              <dl>
                {b.hours.map((h) => (
                  <div key={h.day}>
                    <dt>{h.day}</dt>
                    <dd>{h.time}</dd>
                  </div>
                ))}
              </dl>
              <OpenNow />
            </div>
          </aside>

          <div className="contact-form">
            <div className="cf-head">
              <h3>Pošaljite upit</h3>
              <p>Popunite formu i javićemo vam se sa ponudom.</p>
            </div>
            <ContactForm />
          </div>
        </div>

        <div className="map map-wide">
          <iframe
            title="Prodavnica Budućnost na mapi"
            src={b.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
      
    </>
  );
}
