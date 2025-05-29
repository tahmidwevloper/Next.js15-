import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
//         return NextResponse.redirect(new URL('/home', request.url))
// }

export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/about')) {

        console.log(request.url)
        console.log(request.nextUrl.pathname)
        return NextResponse.rewrite(new URL('/home', request.url))
        // It will rewrite the URL to /home like this:
        // http://localhost:3000/home
    }
}


// // See "Matching Paths" below to learn more
// export const config = {
//     matcher: '/about/:path*',
// }