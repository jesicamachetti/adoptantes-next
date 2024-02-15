import Link from "next/link";
import Image from "next/image";

import logo from "./../public/images/Group 3.png";

export default function Footer() {
  return (
    <footer>
      <div>
        <Image src={logo} alt="" />
        <nav>
          <div>
            <h6>Explorar</h6>
            <div>
              <Link href="/inicio">Inicio</Link>
              <Link href="/sobreNosotros">Sobre Nosotros</Link>
              <Link href="/adoptame">Adoptame</Link>
              <Link href="/contactanos">Contactanos</Link>
            </div>
          </div>
          <div>
            <h6>Links</h6>
            <div>
              <Link href="/inicio">FAQs</Link>
              <Link href="/ayuda">Ayuda</Link>
              <Link href="/politicaDePrivacidad">Politica de privacidad</Link>
              <Link href="/terminosYCondiciones">Terminos y condiciones</Link>
            </div>
          </div>
          <div>
            <h6>Contacto</h6>
          </div>
          <div>
            <h6>Seguinos en nuestras Redes</h6>
            <div>
              {/* <Image />
              <Image />
              <Image /> */}
            </div>
            <input type="text" />
            <button>Subscribirse</button>
          </div>
        </nav>
      </div>
      <div>
        {/* <Image /> */}
        <p>Todos los derechos reservados</p>
      </div>
    </footer>
  );
}
