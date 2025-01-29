import Negotiator from 'negotiator';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { match } from '@formatjs/intl-localematcher';
import { localesAvailable, defaultLocale } from '@/traductions/config';

function getLocale(request: NextRequest): string | undefined {
  const headers = { 'accept-language': request.headers.get('accept-language')?.toString() }
  const languages = new Negotiator({ headers }).languages()
  return match(languages, localesAvailable, defaultLocale);
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;  
  const user_locale = getLocale(request);  
  if (localesAvailable.some(locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)) { return; }  
  return NextResponse.redirect(new URL(`/${user_locale}/${pathname}`, request.url))
}


export const config = {
  matcher: [
    '/((?!api/*|api/send-email.ts|_next/static|_next/image|favicon.ico|apple-icon.png|icon.ico|assets/*|sitemap.xml|legals/*|robots.txt).*)',
  ],
}
