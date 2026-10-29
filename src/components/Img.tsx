interface Props {
  src?: string;
  label: string;
  className?: string;
}

/** Prikazuje sliku ako postoji. Ako nema putanje, prikazuje označeno mjesto za sliku. */
export default function Img({ src, label, className = "" }: Props) {
  if (src) return <img className={`img ${className}`} src={src} alt={label} loading="lazy" />;
  return (
    <div className={`img placeholder ${className}`} role="img" aria-label={`Mjesto za sliku: ${label}`}>
      <span>
        Mjesto za sliku
        <br />
        <small>{label}</small>
      </span>
    </div>
  );
}
