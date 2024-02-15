import Head from "next/head"
import Header from "./header"
import Footer from "./footer"
import Adopcion from "./adopcion"


export default function Layout({ children, title = '', description = '' }) {
  return (
    <>
      <Head>
        <title>{`Patitas Felices`}</title>
        <meta name="description" content={description} />
      </Head>
      <Header />
      <Adopcion />
      <Footer />
    </>
  )
}
