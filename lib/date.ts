type HandledLocale = "fr-FR" | "en-US";

export function formatDateToDayMonth(
  date: Date,
  locale: HandledLocale = "en-US",
): string {
  return date.toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
