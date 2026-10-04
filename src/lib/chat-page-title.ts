/** Match only a chat notification, never a genuine service/article title. */
export function isChatAttentionTitle(title: string): boolean {
  const normalized = title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
  return /^(?:\(\d+\)|\d+)\s+(?:nov[aeych]*\s+zprav[aey]*|new\s+messages?|neue\s+nachrichten?)!?$/.test(normalized);
}

/** Preserve real Next.js title updates; undo only the vendor's message counter. */
export function guardChatPageTitle(document: Document): () => void {
  let lastPageTitle = isChatAttentionTitle(document.title)
    ? document.querySelector<HTMLMetaElement>('meta[property="og:title"]')?.content ?? ""
    : document.title;
  const sync = () => {
    if (isChatAttentionTitle(document.title)) {
      if (lastPageTitle) document.title = lastPageTitle;
    } else if (document.title) {
      lastPageTitle = document.title;
    }
  };
  const observer = new MutationObserver(sync);
  observer.observe(document.head, { childList: true, subtree: true, characterData: true });
  sync();
  return () => observer.disconnect();
}
