import { useEffect, useState } from "react";
import { openStatus } from "../data";

/** Mala oznaka "Otvoreno sada / Zatvoreno" koja se sama osvježava. */
export default function OpenNow({ className = "" }: { className?: string }) {
  const [s, setS] = useState(() => openStatus());
  useEffect(() => {
    const t = setInterval(() => setS(openStatus()), 60_000);
    return () => clearInterval(t);
  }, []);
  return (
    <span className={`open-pill ${s.open ? "is-open" : "is-closed"} ${className}`}>
      <i aria-hidden="true" />
      {s.text}
    </span>
  );
}
