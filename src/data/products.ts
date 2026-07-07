import firefighterSwitch from "../assets/products/firefighter-safety-switch.jpg";
import hybridMicroinverter from "../assets/products/hybrid-microinverter-2000w.jpg";

export type ProductArtKind = "mono" | "topcon" | "hjt" | "battery" | "inverter" | "ev";

export interface Product {
  slug: string;
  name: string;
  tag: string;
  desc: string;
  longDesc?: string;
  art?: ProductArtKind;
  photo?: ImageMetadata;
  features?: string[];
  specs?: { label: string; value: string }[];
}

export const products: Product[] = [
  {
    slug: "monocrystalline-pv-module",
    name: "Μονοκρυσταλλικά Πάνελ",
    tag: "Monocrystalline PV Module",
    desc: "Υψηλής απόδοσης μονοκρυσταλλικά φωτοβολταϊκά πάνελ για οικιακές και εμπορικές εγκαταστάσεις.",
    art: "mono",
  },
  {
    slug: "topcon-panels",
    name: "Topcon Πάνελ",
    tag: "Topcon Panels",
    desc: "Τεχνολογία αιχμής N-type με ενισχυμένη απόδοση και χαμηλότερη ετήσια φθορά.",
    art: "topcon",
  },
  {
    slug: "hjt-panels",
    name: "HJT Πάνελ",
    tag: "Heterojunction Panels",
    desc: "Υβριδική τεχνολογία κελιών για μέγιστη απόδοση σε κάθε συνθήκη φωτισμού.",
    art: "hjt",
  },
  {
    slug: "pv-storage-batteries",
    name: "Μπαταρίες Αποθήκευσης",
    tag: "PV Storage Batteries",
    desc: "Συστήματα αποθήκευσης ενέργειας για αυτονομία και βελτιστοποίηση της κατανάλωσης.",
    art: "battery",
  },
  {
    slug: "grid-hybrid-inverters",
    name: "Inverters",
    tag: "Grid & Hybrid Inverters",
    desc: "Αξιόπιστοι μετατροπείς ισχύος από κορυφαίους κατασκευαστές, για κάθε τύπο έργου.",
    art: "inverter",
  },
  {
    slug: "ev-chargers",
    name: "Φορτιστές EV",
    tag: "EV Chargers",
    desc: "Φορτιστές ηλεκτρικών οχημάτων για οικιακή και επαγγελματική χρήση.",
    art: "ev",
  },
  {
    slug: "firefighter-safety-switch",
    name: "Διακόπτης Ασφαλείας Πυρόσβεσης",
    tag: "Firefighter Safety Switch",
    desc: "Ταχεία διακοπή της υψηλής τάσης μεταξύ πάνελ και inverter σε περίπτωση έκτακτης ανάγκης, για κυκλώματα έως 1500V.",
    longDesc:
      "Ο διακόπτης ασφαλείας πυρόσβεσης String-level επιτρέπει την ταχεία διακοπή της υψηλής τάσης μεταξύ των φωτοβολταϊκών πάνελ και του inverter σε περίπτωση έκτακτης ανάγκης, προστατεύοντας πυροσβέστες και τεχνικούς. Κατάλληλος για οικιακά και εμπορικά/βιομηχανικά (C&I) φωτοβολταϊκά έργα με κυκλώματα έως 1500V.",
    photo: firefighterSwitch,
    features: [
      "Έως 1500V μέγιστη τάση βρόχου",
      "Ταχεία διακοπή σε περίπτωση έκτακτης ανάγκης",
      "Κατάλληλο για οικιακά & C&I έργα",
      "Ενισχυμένη προστασία πυροσβεστών και τεχνικών",
    ],
    specs: [
      { label: "Σειρά", value: "PEFS-EL (String-level)" },
      { label: "Μέγιστη Τάση Βρόχου", value: "1500V" },
      { label: "Εφαρμογή", value: "Οικιακά & C&I έργα" },
    ],
  },
  {
    slug: "hybrid-microinverter-2000w",
    name: "Υβριδικό Microinverter 2000W",
    tag: "Hybrid Microinverter 2000W",
    desc: "97% μέγιστη απόδοση, 4 MPPT trackers, WiFi και συμβατότητα με μπαταρίες LiFePO4 — παράγει, αποθηκεύει και εξοικονομεί ενέργεια.",
    longDesc:
      "Το υβριδικό microinverter 2000W συνδυάζει παραγωγή, αποθήκευση και εξοικονόμηση ενέργειας σε μία συμπαγή, αδιάβροχη μονάδα. Με 4 ανεξάρτητα MPPT trackers μεγιστοποιεί την απόδοση ακόμη και σε μερική σκίαση, ενώ η συνδεσιμότητα WiFi και Bluetooth επιτρέπει παρακολούθηση του συστήματος σε πραγματικό χρόνο.",
    photo: hybridMicroinverter,
    features: [
      "97% μέγιστη απόδοση αιχμής",
      "4 ανεξάρτητα MPPT trackers",
      "WiFi και αδιάβροχη κατασκευή",
      "Συμβατό με μπαταρίες LiFePO4",
      "Συνδεσιμότητα Bluetooth",
    ],
    specs: [
      { label: "Ισχύς Εξόδου", value: "2000W" },
      { label: "Μέγιστη Απόδοση", value: "97%" },
      { label: "MPPT Trackers", value: "4" },
      { label: "Συνδεσιμότητα", value: "WiFi & Bluetooth" },
      { label: "Συμβατότητα Μπαταρίας", value: "LiFePO4" },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
