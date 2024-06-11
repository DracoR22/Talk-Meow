import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  publicRoutes: ['/', '/auth(.*)', '/portal(.*)', '/avatars(.*)', '/favicon.ico', '/blog(.*)'],
  ignoredRoutes: ['/chatbot', '/images(.*)'],
})

export const config = {
  matcher: ['/((?!.+.[w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}