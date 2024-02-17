import { NextRequest } from "next/server";
import { updateSession } from "./lib";
import { NextResponse } from 'next/server'
import { redirect } from "next/navigation";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
//   const currentUser = request.cookies.get('session')?.value
//  console.log(request.url)
//   if (currentUser) {
//      NextResponse.redirect(new URL('/about', request.url))
//      return
//   }
//    NextResponse.redirect(new URL('/', request.url))
//    return


}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}