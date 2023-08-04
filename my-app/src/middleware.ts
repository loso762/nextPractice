import {NextRequest, NextResponse} from "next/server";

export function middleware(request: NextRequest) {
  console.log("미들웨어 실행중");
  if (request.nextUrl.pathname.startsWith("/pants/1004")) {
    return NextResponse.redirect(new URL("/pants", request.url));
  }
}

export const config = {
  matcher: ["/pants/:path*"],
};
