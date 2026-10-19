/**
 * Search title for sales pages. The brand is appended only while the whole title still fits a typical
 * search-result width; the layout adds the " | NATURCHEM" suffix on top of this value.
 */
export function salesMetaTitle(title: string, brand: string, maxLength = 48): string {
  const branded = `${title} | ${brand}`;
  return branded.length <= maxLength ? branded : title;
}
