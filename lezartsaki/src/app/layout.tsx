import "@/app/public/ui/globals.css";
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: {
    template: '%s | Lez Arts Aki',
    default: 'Page web Lez Arts Aki',
  },
  metadataBase: new URL('https://lezartski.fr'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
