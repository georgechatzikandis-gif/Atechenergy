import type { Lang, Dict } from "./base";
import { baseDict } from "./base";
import { dict as homeExtra } from "./pages/home-extra";
import { dict as risenHyperIon } from "./pages/risen-hyper-ion";
import { dict as risenCiEnergyStorage } from "./pages/risen-ci-energy-storage";
import { dict as projoyPefsRapidShutdown } from "./pages/projoy-pefs-rapid-shutdown";
import { dict as lithiumvalleyResidential } from "./pages/lithiumvalley-residential";
import { dict as suntechUltraT2 } from "./pages/suntech-ultra-t2";
import { dict as gridHybridInverters } from "./pages/grid-hybrid-inverters";
import { dict as monocrystallinePvModule } from "./pages/monocrystalline-pv-module";
import { dict as hybridMicroinverter2000w } from "./pages/hybrid-microinverter-2000w";
import { dict as slugTemplate } from "./pages/slug-template";
import { dict as productsListing } from "./pages/products-listing";
import { dict as calculator } from "./pages/calculator";
import { dict as productData } from "./pages/product-data";

const pageDicts: Record<Lang, Dict>[] = [
  homeExtra,
  risenHyperIon,
  risenCiEnergyStorage,
  projoyPefsRapidShutdown,
  lithiumvalleyResidential,
  suntechUltraT2,
  gridHybridInverters,
  monocrystallinePvModule,
  hybridMicroinverter2000w,
  slugTemplate,
  productsListing,
  calculator,
  productData,
];

const langs: Lang[] = ["el", "en", "de", "fr", "es", "it"];

export function buildDictionary(): Record<Lang, Dict> {
  const merged = {} as Record<Lang, Dict>;
  for (const lang of langs) {
    merged[lang] = { ...baseDict[lang] };
    for (const pd of pageDicts) {
      Object.assign(merged[lang], pd[lang]);
    }
  }
  return merged;
}
