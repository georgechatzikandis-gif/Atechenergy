import firefighterSwitch from "../assets/products/firefighter-safety-switch.jpg";
import hybridMicroinverter from "../assets/products/tsun-powertrunk-card.jpg";
import risenCiStorage from "../assets/hero/risen-ci-storage.jpg";
import suntechLogo from "../assets/brands/suntech-logo.png";
import risenLogo from "../assets/brands/risen-logo.png";

export type ProductArtKind = "mono" | "topcon" | "hjt" | "battery" | "inverter" | "ev";

export interface Product {
  slug: string;
  name: string;
  tag: string;
  desc: string;
  longDesc?: string;
  art?: ProductArtKind;
  photo?: ImageMetadata;
  distributor?: string;
  features?: string[];
  specs?: { label: string; value: string }[];
}

export const products: Product[] = [
  {
    slug: "monocrystalline-pv-module",
    name: "Πάνελ",
    tag: "Risen Energy",
    desc: "Υψηλής απόδοσης μονοκρυσταλλικά φωτοβολταϊκά πάνελ για οικιακές και εμπορικές εγκαταστάσεις.",
    art: "mono",
    photo: risenLogo,
    distributor: "ΕΠΙΣΗΜΟΣ ΔΙΑΝΟΜΕΑΣ RISEN ENERGY",
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
    name: "Φορτιστές EVE",
    tag: "EVE Chargers",
    desc: "Φορτιστές ηλεκτρικών οχημάτων για οικιακή και επαγγελματική χρήση.",
    art: "ev",
  },
  {
    slug: "risen-ci-energy-storage",
    name: "C&I Αποθήκευση Ενέργειας",
    tag: "Risen C&I Energy Storage System",
    desc: "Βιομηχανικά συστήματα αποθήκευσης ενέργειας Risen Energy για εμπορικές και βιομηχανικές εγκαταστάσεις.",
    longDesc:
      "Τα C&I συστήματα αποθήκευσης ενέργειας Risen Energy προσφέρουν αξιόπιστη, κλιμακώσιμη αποθήκευση για εμπορικές και βιομηχανικές εγκαταστάσεις. Με τεχνολογία LiFePO₄, ολοκληρωμένο BMS και έξυπνη διαχείριση O&M, βελτιστοποιούν το κόστος ενέργειας, μειώνουν την εξάρτηση από το δίκτυο και εξασφαλίζουν συνεχή ροή ισχύος ακόμη και σε περίπτωση διακοπής.",
    photo: risenCiStorage,
    features: [
      "Ολοκληρωμένη ασφάλεια (Comprehensive Safety)",
      "Υψηλή αξιοπιστία για βιομηχανικά περιβάλλοντα",
      "Έξυπνη διαχείριση λειτουργίας & συντήρησης (Intelligent O&M)",
      "Κλιμακώσιμη αρχιτεκτονική — από C&I έως utility-scale",
      "Τεχνολογία LiFePO₄ με μακρά διάρκεια ζωής",
      "Πλήρης ενσωμάτωση δικτύου (Grid-connected & Off-grid)",
    ],
    specs: [
      { label: "Τύπος", value: "C&I / Utility-scale ESS" },
      { label: "Τεχνολογία Κυψέλης", value: "LiFePO₄" },
      { label: "Εφαρμογή", value: "Εμπορικές & Βιομηχανικές" },
      { label: "Λειτουργία", value: "Grid-connected / Off-grid" },
      { label: "Κατασκευαστής", value: "Risen Energy" },
      { label: "Κατηγορίες", value: "Residential · C&I · Utility-scale" },
    ],
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
    tag: "TSUN Hybrid Microinverter — TSOL-MH2000",
    desc: "700W ανά πάνελ, 4 MPPT trackers, 2000W on/off-grid, IP67, WiFi & Bluetooth — παράγει, αποθηκεύει και εξοικονομεί ενέργεια σε ένα μοναδικό σύστημα.",
    longDesc:
      "Το TSUN Hybrid Microinverter TSOL-MH2000 είναι το κεντρικό στοιχείο ενός plug & play υβριδικού συστήματος αποθήκευσης. Συνδέεται μεταξύ φωτοβολταϊκών πάνελ και μπαταρίας, φορτίζει την περίσσεια ενέργειας και την αποδίδει όταν χρειαστεί. Υποστηρίζει on-grid, off-grid και αποθήκευση ενέργειας — με εναλλαγή on/off-grid σε λιγότερο από 10ms για αδιάλειπτη παροχή ρεύματος.",
    photo: hybridMicroinverter,
    features: [
      "700W ανά πάνελ — έως 2800W συνολική ισχύς εισόδου (4 πάνελ)",
      "4 ανεξάρτητα MPPT trackers — μέγιστη απόδοση ακόμα και με σκίαση",
      "2000W on-grid/off-grid έξοδος + 150% overload για 2 δευτερόλεπτα",
      "Εναλλαγή on-grid/off-grid σε <10ms — αδιάλειπτη παροχή ρεύματος",
      "IP67 αδιάβροχη κατασκευή — λειτουργία από -40°C έως +65°C",
      "60V χαμηλή τάση + απομόνωση υψηλής συχνότητας για ασφαλή λειτουργία",
      "Έξυπνη φόρτιση/εκφόρτιση από PV module ή δίκτυο",
      "WiFi, Bluetooth & RS485 — παρακολούθηση και έλεγχος από οπουδήποτε",
      "Συμβατό με πολλούς τύπους μπαταριών LiFePO4",
      "Zero Export (προαιρετικά) — συμμόρφωση με κανονισμούς δικτύου",
    ],
    specs: [
      { label: "Μοντέλο", value: "TSOL-MH2000" },
      { label: "Ισχύς Εισόδου PV", value: "400~700+ Wp ανά πάνελ" },
      { label: "Αριθμός Πάνελ", value: "1 έως 4" },
      { label: "Max Ισχύς Φόρτισης/Εκφόρτισης", value: "2000W" },
      { label: "Max Ισχύς AC On-grid", value: "2000W (ή 800W ανά χώρα)" },
      { label: "Max Ισχύς AC Off-grid", value: "2000W" },
      { label: "Overload", value: "150% (2s)" },
      { label: "Εναλλαγή On/Off-grid", value: "<10ms" },
      { label: "Βαθμός Προστασίας", value: "IP67" },
      { label: "Θερμοκρασία Λειτουργίας", value: "-40°C έως +65°C" },
      { label: "Συνδεσιμότητα", value: "WiFi, Bluetooth, RS485" },
      { label: "Διαστάσεις (ΠxΥxΒ mm)", value: "360 × 320 × 51" },
      { label: "Βάρος", value: "8 kg" },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
