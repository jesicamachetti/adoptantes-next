import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
    <div>
    <nav>
            <Link href="/">
                Inicio
            </Link>

            <Link href="/nosotros">
                Nosotros
            </Link>

            <Link href="blog">
                Blog
            </Link>
           </nav>
    </div>
    </footer>
  )
}
