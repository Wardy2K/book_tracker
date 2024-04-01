import {
  LoginLink,
  LogoutLink,
  RegisterLink,
  getKindeServerSession,
} from '@kinde-oss/kinde-auth-nextjs/server'
import Link from 'next/link'

export default async function Header() {
  const { isAuthenticated } = getKindeServerSession()

  return (
    <header className="bg-primary flex justify-between p-4 text-white">
      <Link href="/">Book tracker</Link>

      {(await isAuthenticated()) ? (
        <div className="flex gap-4">
          <Link href="/dashboard">Dashboard</Link>
          <div className="text-red-500">
            <LogoutLink>Sign out</LogoutLink>
          </div>
        </div>
      ) : (
        <div className="flex gap-8">
          <RegisterLink>Sign up</RegisterLink>
          <LoginLink>Sign in</LoginLink>
        </div>
      )}
    </header>
  )
}
