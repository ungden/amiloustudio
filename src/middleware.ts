import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if a cookie is already set for currency/country preference
  const countryCookie = request.cookies.get('country');
  const currencyCookie = request.cookies.get('currency');

  if (countryCookie && currencyCookie) {
    return NextResponse.next();
  }

  // Get geolocation from Vercel edge headers
  const country = request.headers.get('x-vercel-ip-country') || 'US';
  
  // Basic currency mapping
  let currency = 'USD';
  if (country === 'VN') currency = 'VND';
  else if (country === 'GB') currency = 'GBP';
  else if (['FR', 'DE', 'IT', 'ES', 'NL'].includes(country)) currency = 'EUR';

  // Create response
  const response = NextResponse.next();

  // Set cookies for client-side usage
  if (!countryCookie) {
    response.cookies.set('country', country, { maxAge: 60 * 60 * 24 * 30 }); // 30 days
  }
  if (!currencyCookie) {
    response.cookies.set('currency', currency, { maxAge: 60 * 60 * 24 * 30 });
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
