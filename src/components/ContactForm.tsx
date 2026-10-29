import { useState, type FormEvent } from "react";
import { categories, gmailLink, mailto } from "../data";
import Icon from "./Icon";

const TYPES = [
  { value: "Za dom", icon: "home" },
  { value: "Za ugostiteljski objekat", icon: "utensils" },
];

const MAX = 600;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("Za dom");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const subject = `Upit sa sajta – ${name}${topic ? ` (${topic})` : ""}`;
  const body =
    `Poštovani,\n\n${message}\n\n` +
    `--\nIme i prezime: ${name}\nTelefon: ${phone}\n` +
    (email ? `Mejl: ${email}\n` : "") +
    `Upit se odnosi na: ${type}` +
    (topic ? `\nKategorija: ${topic}` : "");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    window.location.href = mailto(subject, body);
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(`${subject}\n\n${body}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      /* kopiranje nije podržano */
    }
  }

  if (sent) {
    return (
      <div className="form-done" role="status">
        <span className="done-ico">
          <Icon name="check" size={30} />
        </span>
        <h4>Poruka je spremna!</h4>
        <p>
          Otvorili smo vašu mejl aplikaciju sa popunjenom porukom. Samo kliknite <strong>Send / Pošalji</strong>.
        </p>
        <p className="done-sub">Ako se ništa nije otvorilo, izaberite jednu od opcija:</p>
        <div className="done-actions">
          <a className="btn accent" href={gmailLink(subject, body)} target="_blank" rel="noreferrer">
            <Icon name="mail" size={18} /> Otvori u Gmailu
          </a>
          <a className="btn ghost" href={mailto(subject, body)}>
            Otvori mejl aplikaciju
          </a>
          <button type="button" className="btn ghost" onClick={copy}>
            <Icon name={copied ? "check" : "copy"} size={18} /> {copied ? "Kopirano" : "Kopiraj poruku"}
          </button>
        </div>
        <button type="button" className="done-back" onClick={() => setSent(false)}>
          ← Izmijeni poruku
        </button>
      </div>
    );
  }

return (
  <form className="form" onSubmit={onSubmit}>
    <div className="form-row">
      <div className="field">
        <label htmlFor="cf-name" className="field-label">Ime i prezime</label>
        <div className="input-wrap">
          <Icon name="user" size={18} />
          <input id="cf-name" required value={name} onChange={(e) => setName(e.target.value)}
            autoComplete="name" placeholder="Vaše ime" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="cf-phone" className="field-label">Telefon</label>
        <div className="input-wrap">
          <Icon name="phone" size={18} />
          <input id="cf-phone" required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}
            autoComplete="tel" placeholder="+387 6x xxx xxx" />
        </div>
      </div>
    </div>

    <div className="form-row">
      <div className="field">
        <label htmlFor="cf-email" className="field-label">
          Mejl <span className="opt">nije obavezno</span>
        </label>
        <div className="input-wrap">
          <Icon name="mail" size={18} />
          <input id="cf-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
            autoComplete="email" placeholder="ime@primjer.com" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="cf-topic" className="field-label">Šta vas zanima</label>
        <div className="input-wrap select-wrap">
          <Icon name="box" size={18} />
          <select id="cf-topic" value={topic} onChange={(e) => setTopic(e.target.value)}>
            <option value="">Izaberite kategoriju</option>
            {categories.map((c) => (
              <option key={c.slug} value={c.name}>{c.name}</option>
            ))}
          </select>
        </div>
      </div>
    </div>

    <fieldset className="seg">
      <legend className="sr-only">Upit se odnosi na</legend>
      <div className="seg-grid">
        {TYPES.map((t) => (
          <label key={t.value} className={type === t.value ? "on" : ""}>
            <input type="radio" name="type" value={t.value} checked={type === t.value}
              onChange={() => setType(t.value)} />
            <Icon name={t.icon} size={18} />
            <span>{t.value}</span>
          </label>
        ))}
      </div>
    </fieldset>

    <div className="field">
      <label htmlFor="cf-msg" className="field-label">Poruka</label>
      <textarea id="cf-msg" required rows={3} maxLength={MAX} value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Napišite šta vas zanima (proizvod, količina...)" />
      <span className="counter">{message.length}/{MAX}</span>
    </div>

    <button className="btn accent big submit" type="submit">
      <Icon name="send" size={18} /> Pošalji upit
    </button>

    <p className="trust-line">
      <Icon name="clock" size={14} /> Odgovaramo u toku radnog vremena
    </p>
  </form>
);
}