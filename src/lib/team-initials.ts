const titlePrefixes = /^(Ing\.|Mgr\.|DiS\.|Bc\.|doc\.|RNDr\.|prof\.)$/i;

/** Iniciály pro placeholder avatar bez fotografie. */
export function getTeamInitials(name: string): string {
  const parts = name
    .replace(/,/g, "")
    .split(/\s+/)
    .filter((part) => part.length > 0 && !titlePrefixes.test(part));

  if (parts.length >= 2) {
    return `${parts[0][0] ?? ""}${parts[1][0] ?? ""}`.toUpperCase();
  }

  return (parts[0]?.slice(0, 2) ?? "?").toUpperCase();
}
