import Image from 'next/image'
import Link from 'next/link'


export default function Header() {
  return (
    <header>
        <div className="contenedor">
           {/* <Image src="huella.png" width={300} height={40} alt='imagen logotipo'/> */}
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
    </header>
  )
}
