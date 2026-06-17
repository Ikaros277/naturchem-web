import { FooterLegalBarClient } from "@/components/FooterLegalBarClient";

type Props = {
  copyright: string;
  legalAria: string;
  privacy: string;
  cookies: string;
};

export function FooterLegalBar({ copyright, legalAria, privacy, cookies }: Props) {
  return (
    <FooterLegalBarClient
      copyright={copyright}
      legalAria={legalAria}
      privacy={privacy}
      cookies={cookies}
    />
  );
}
