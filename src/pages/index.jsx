import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Clients } from '@/components/Clients'
import { Biography } from '@/components/Biography'
import { Sisters } from '@/components/Sisters'
import { PhotoGallery } from '@/components/PhotoGallery'
import { Contact } from '@/components/Contact'
import { PhotoCollage } from '@/components/PhotoCollage'
import useTranslation from 'next-translate/useTranslation'

export default function Home() {
  const { t } = useTranslation()
  return (
    <>
      <Head>
        <title>Søstrene Hals</title>
        <meta name="description" content={t('common:metaDescription')} />
        <meta
          name="keywords"
          content="fiolin, opera, klassisk sang, musikk i bryllup, musikk til fest, konserter, julekonsert, violin, sang, duo, Sissel Kyrkjebø, pop, begravelser, norsk, folkemusikk, event, piano, booke sang, booke fiolin, booke søstrene Hals, crossover, julemusikk, Rybak, Oslo, Norge, violin, classical songs, wedding music, party music, concerts, Christmas concert, violin, song, duette, pop, funerals, Norwegian, folk music, event, piano, book song, book violin, book Søstrene Hals, Christmas music, Norway"
        ></meta>
      </Head>
      <Header />
      <main>
        <Hero />
        <Clients />
        <Biography />
        <Sisters />
        <PhotoGallery />
        <Contact />
        <PhotoCollage />
      </main>
      <Footer />
    </>
  )
}
