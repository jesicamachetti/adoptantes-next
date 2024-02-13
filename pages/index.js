import Link from 'next/link'
import Layout from '../components/layout'


export default function Home() {
  return (
    <>
    <Layout
    title={'Inicio'}
    description={'Blog de adopción responsable de gatos y perros'}
    >
      <h1>Adopción</h1>
      <Link href="/nosotros">Nosotros</Link>
      </Layout>

    </>
  )
}
