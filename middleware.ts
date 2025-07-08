import NextAuth from 'next-auth'
import { authConfig } from './auth.config'

// 使用 authConfig 初始化 NextAuth，并导出 auth 中间件
export default NextAuth(authConfig).auth

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  // 使用 matcher 来指定中间件应该在哪些路径上运行
  // 避免在不需要身份验证的静态资源（如图片）上运行
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
