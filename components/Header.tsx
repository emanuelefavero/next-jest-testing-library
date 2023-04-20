import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()

  const isHome = router.pathname === '/'

  return (
    <header>
      <Link href='/'>Home</Link>
      {!isHome && <button onClick={() => router.back()}>Back</button>}
    </header>
  )
}
