import "@/app/public/ui/globals.css"
import { bebas_neue, outfit, roboto_condensed } from '../public/ui/fonts'
import { localesAvailableType } from "@/traductions/config";

export default async function Layout({ children, params }: { children: React.ReactNode; params: { lang: localesAvailableType } }) {
    return (
        <html lang={params.lang}>
            <body className={`${outfit.className} ${bebas_neue.variable} ${roboto_condensed.variable}`}>
                {children}
            </body>
        </html>
    );
  }
  