import Link from "next/link";
import Image from "next/image";
import style from "../styles/footer.module.css"

import logo from "./../public/images/Group 3.png";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.logo}>
        <Image  src={logo} alt="" /> </div>
        <nav className={style.navegacion}>
          <div className={style.contenedor}>
            <h6 className={style.h6}>Explorar</h6>
            <div className={style.columna}>
              <Link href="/inicio">Inicio</Link>
              <Link href="/sobreNosotros">Sobre Nosotros</Link>
              <Link href="/adoptame">Adoptame</Link>
              <Link href="/contactanos">Contactanos</Link>
            </div>
          </div>
          <div className={style.contenedor}>
            <h6 className={style.h6}>Links</h6>
            <div className={style.columna}>
              <Link href="/inicio">FAQs</Link>
              <Link href="/ayuda">Ayuda</Link>
              <Link href="/politicaDePrivacidad">Politica de privacidad</Link>
              <Link href="/terminosYCondiciones">Terminos y condiciones</Link>
            </div>
          </div>
          <div className={style.contenedor}>
            <h6 className={style.h6}>Contacto</h6>
            <p> Avenida Siempreviva 742, Bs. As.</p>
            <p> @patitasfelices@gmail.com</p>
            <p> (+52)11 6151-3562</p>
            

          </div>
          <div className={style.contenedor}>
            <h6 className={style.h6}>Seguinos en nuestras Redes</h6>
            <div>
              {/* <Image />
              <Image />
              <Image /> */}
            </div>
            <div>
            <input type="text" />
            <button className={style.boton}>Subscribirse</button>
            </div>
          </div>
        </nav>
      
      <div>
        {/* <Image /> */}
        <p className={style.parrafo}>Todos los derechos reservados</p>
      </div>
    </footer>
  );
}
