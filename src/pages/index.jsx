import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Clients } from '@/components/Clients'
import { Biography } from '@/components/Biography'

import { Sisters } from '@/components/Sisters'
import { Contact } from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Søstrene Hals</title>
        <meta
          name="description"
          content="En norsk søsken duo som holder til i Oslo. Sopran og fiolin som tar utgangspunkt i de virtuose og vake klassiske melodier og ender i de tøffeste rytmer. De liker å overraske."
        />
        <meta
          name="keywords"
          content="fiolin, opera, klassisk sang, musikk i bryllup, musikk til fest, konserter, julekonsert, violin, sang, duo, crossover, Sissel Kyrkjebø, pop, begravelser, norsk, folkemusikk, event, piano, booke sang, booke fiolin, booke søstrene Hals, crossover, julemusikk, Rybak, Oslo, Norge"
        ></meta>
      </Head>
      <Header />
      <main>
        <Hero />
        <Clients />
        <Biography />
        <Sisters />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
