/**
 * UI translations. Keep en and id side-by-side per key for easy translator review.
 */

export type Locale = "en" | "id";

const translations = {
  previous: { en: "← Previous", id: "← Sebelumnya" },
  next: { en: "Next →", id: "Selanjutnya →" },
  backToBlog: { en: "← Back to Blog", id: "← Kembali ke Blog" },
  themeDark: { en: "Dark", id: "Gelap" },
  themeLight: { en: "Light", id: "Terang" },
  pageOf: {
    en: (n: number, total: number) => `Page ${n} of ${total}`,
    id: (n: number, total: number) => `Halaman ${n} dari ${total}`,
  },
  minReadOne: { en: "1 min read", id: "1 menit baca" },
  minRead: { en: "min read", id: "menit baca" },
} as const;

type StringKey = Exclude<keyof typeof translations, "pageOf">;

export function t(key: "pageOf", locale: Locale): (n: number, total: number) => string;
export function t(key: StringKey, locale: Locale): string;
export function t(key: keyof typeof translations, locale: Locale): string | ((n: number, total: number) => string) {
  const value = translations[key][locale];
  return typeof value === "function" ? value : value;
}

export function tPageOf(n: number, total: number, locale: Locale): string {
  return translations.pageOf[locale](n, total);
}

export function tReadingTime(minutes: number, locale: Locale): string {
  return minutes === 1 ? translations.minReadOne[locale] : `${minutes} ${translations.minRead[locale]}`;
}
