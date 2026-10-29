// Slike stavi u public/images/. Za proizvode najbolje PNG sa providnom pozadinom
// ili fotografije oko 1000 px po široj strani.
// NAPOMENA: slike koje su sada upisane su privremene (isječci sa Instagram screenshotova,
// male rezolucije). Zamijeni ih originalnim fotografijama pod ISTIM imenom ili promijeni putanju ovdje.

export interface Category {
  name: string;
  text: string;
  image?: string;
}

export const business = {
  name: "Budućnost d.o.o.",
  tagline: "Sve za domaćinstvo i ugostiteljstvo",
  phone: "+387 65 727 367",
  phoneHref: "tel:+38765727367",
  contactPerson: "Ivana Ilić",
  address: "Kulina Bana 52, Bijeljina",
  mapHref: "https://www.google.com/maps/search/?api=1&query=Kulina+Bana+52+Bijeljina",
  mapEmbed: "https://www.google.com/maps?q=Kulina+Bana+52+Bijeljina&output=embed",
  instagram: "https://www.instagram.com/buducnostdoo/",
  instagramHandle: "buducnostdoo",
  facebook: "https://www.facebook.com/buducnostbn/",
  // Radno vrijeme: dayIndex 0 = nedjelja ... 6 = subota. open/close u satima (null = zatvoreno)
  schedule: {
    0: null,
    1: { open: 8, close: 19 },
    2: { open: 8, close: 19 },
    3: { open: 8, close: 19 },
    4: { open: 8, close: 19 },
    5: { open: 8, close: 19 },
    6: { open: 8, close: 17 },
  } as Record<number, { open: number; close: number } | null>,
  hours: [
    { day: "Ponedjeljak – Petak", time: "08:00 – 19:00" },
    { day: "Subota", time: "08:00 – 17:00" },
    { day: "Nedjelja", time: "Zatvoreno" },
  ],
  shipping: "10 KM",
  logo: "/images/logo.png" as string | undefined,
  heroImage: "/images/crveni-lonci.png" as string | undefined,
  heroImage2: "/images/servis-solje.png" as string | undefined,
  heroImage3: "/images/solje-cvijece.png" as string | undefined,
  metalacImage: "/images/do-small-things.png" as string | undefined,
  metalacImage2: "/images/zena-majka-kraljica.png" as string | undefined,
  homeImage: "/images/zadom.png" as string | undefined,
  horecaImage: "/images/zaugostlj.png" as string | undefined,
  email: "ivana.ilic.buducnost@gmail.com",
  instagramDm: "https://ig.me/m/buducnostdoo",
  messenger: "https://m.me/buducnostbn",
};

export const categories: Category[] = [
  { name: "Metalac posuđe", text: "Emajlirano i inox posuđe, lonci, šerpe.", image: "/images/crveni-lonci.png" },
  { name: "Supijere", text: "Supijere za serviranje čorbi i variva.", image: "/images/supijere.png" },
  { name: "Tepsije i đuveči", text: "Tepsije i đuveči za pečenje i serviranje.", image: "/images/tepsije.png" },
  { name: "Tiganji", text: "Emajlirani i inox tiganji za svaku kuhinju.", image: "/images/tiganj.png" },
  { name: "Lončići", text: "Mali lončići i šerpice za svakodnevnu upotrebu.", image: "/images/loncic.png" },
  { name: "Čajnici i džezve", text: "Čajnici i džezve za čaj i kafu.", image: "/images/dzezva.png" },
  { name: "Šoljice za kafu", text: "Šoljice sa tanjirićima za kafu i espreso.", image: "/images/soljicazlatna.png" },
  { name: "Šolje za čaj", text: "Šolje za čaj i veće šolje za svaki dan.", image: "/images/soljacaj.png" },
  { name: "Servisi", text: "Tanjiri i servisi za jelo i kafu za svaku priliku.", image: "/images/tufnicaset.png" },
  { name: "Desertni setovi", text: "Setovi tanjirića i pribora za deserte.", image: "/images/desertni.png" },
  { name: "Kristal i staklo", text: "Čaše i staklo za služenje.", image: "/images/staklo.png" },
  { name: "Escajg", text: "Kašike, viljuške i noževi.", image: "/images/escajg.png" },
  { name: "Mali kuhinjski aparati", text: "Mikseri, aparati za vafl, kafu i sitna kuhinjska pomagala.", image: "/images/mikser.png" },
  { name: "Cvjetni dekor", text: "Dekor za dom sa cvjetnim motivima.", image: "/images/cvijece.png" },
  { name: "Metalac dekori", text: "Metalac posuđe u posebnim dekorima.", image: "/images/dekor.png" },
  { name: "Dječiji program", text: "Posuđe i setovi za najmlađe.", image: "/images/djecijiset.png" },
];

// Proizvodi koji se prikazuju u karuselu "Izdvajamo" na početnoj
export const featured = [
  { name: 'Roze lonci "Žena Majka Kraljica', brand: "Metalac", image: "/images/zena-majka-kraljica.png", to: "/asortiman/metalac-posude" },
  { name: "Češki porcelan, set za kolače", brand: "Desertni setovi", image: "/images/solje-cvijece.png", to: "/asortiman/desertni-setovi" },
  { name: "Slavski set sa ikonom", brand: "Slavski program", image: "/images/slavski-set.png", to: "/asortiman/slavski-program" },
  { name: "Porcelanska šoljica sa zlatnim detaljima", brand: "Šoljice za kafu", image: "/images/soljicazlatna.png", to: "/asortiman/soljice-za-kafu" },
  { name: "Metalac set iz kolekcije Proljeće", brand: "Metalac", image: "/images/do-small-things.png", to: "/asortiman/metalac-posude" },
  { name: "Set za kolače sa viljuščicama", brand: "Desertni setovi", image: "/images/tufnicaset.png", to: "/asortiman/desertni-setovi" },
  { name: 'Set "Žena Majka Kraljica", bijeli', brand: "Metalac", image: "/images/kuhinjski_set.png", to: "/asortiman/metalac-posude" },
];

// Slike za traku "Pratite nas" (isječci sa Instagrama, zamijeni svojim)
export const instaImages = [
  "/images/serpice.png",
  "/images/rozesolje.png",
  "/images/soljaruze.png",
  "/images/mikimausserpa.png",
  "/images/tufnicetanjiri.png",
  "/images/domacicaserpe.png",
];

export function mailto(subject: string, body = ""): string {
  const q = new URLSearchParams({ subject, body }).toString().replace(/\+/g, "%20");
  return `mailto:${business.email}?${q}`;
}

export function gmailLink(subject: string, body = ""): string {
  const q = new URLSearchParams({ view: "cm", fs: "1", to: business.email, su: subject, body })
    .toString()
    .replace(/\+/g, "%20");
  return `https://mail.google.com/mail/?${q}`;
}

/** Da li je prodavnica sada otvorena (po lokalnom vremenu posjetioca). */
export function openStatus(now = new Date()): { open: boolean; text: string } {
  const sch = business.schedule;
  const day = now.getDay();
  const today = sch[day];
  const hour = now.getHours() + now.getMinutes() / 60;
  if (today && hour >= today.open && hour < today.close) {
    return { open: true, text: `Otvoreno sada · do ${String(today.close).padStart(2, "0")}:00` };
  }
  // pronađi sljedeći radni dan
  if (today && hour < today.open) {
    return { open: false, text: `Zatvoreno · otvaramo danas u ${String(today.open).padStart(2, "0")}:00` };
  }
  for (let i = 1; i <= 7; i++) {
    const d = (day + i) % 7;
    const s = sch[d];
    if (s) {
      const label = i === 1 ? "sutra" : ["u nedjelju", "u ponedjeljak", "u utorak", "u srijedu", "u četvrtak", "u petak", "u subotu"][d];
      return { open: false, text: `Zatvoreno · otvaramo ${label} u ${String(s.open).padStart(2, "0")}:00` };
    }
  }
  return { open: false, text: "Zatvoreno" };
}
