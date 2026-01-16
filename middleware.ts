import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

const intlMiddleware = createMiddleware({
  locales: ['ja', 'en'],
  defaultLocale: 'ja'
});

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === '/') {
    return NextResponse.redirect(new URL('/ja', request.url));
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|.*\\..*).*)']
};