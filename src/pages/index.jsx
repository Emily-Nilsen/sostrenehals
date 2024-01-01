import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Clients } from '@/components/Clients'
import { Biography } from '@/components/Biography'
import { Sisters } from '@/components/Sisters'
import { PhotoGallery } from '@/components/PhotoGallery'
import { Julekonsert } from '@/components/Julekonsert'
import { VideoComponent } from '@/components/VideoComponent'
import { Contact } from '@/components/Contact'
import { PhotoCollage } from '@/components/PhotoCollage'
import { Modal } from '@/components/Modal'
import useTranslation from 'next-translate/useTranslation'

export default function Home() {
  const { t } = useTranslation()

  // Define your OG data here
  const ogTitle = 'Søstrene Hals'
  const ogDescription =
    'Sopran- og fiolinduo • Kathrine og Susanne Hvinden Hals'
  const ogImage =
    'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/S%C3%B8strene%20Hals/image3_mjp8nv_apnktl.webp' // Replace with your image URL
  const ogUrl = 'https://www.sostrenehals.com' // Replace with the URL of your website

  return (
    <>
      <Head>
        <title>Søstrene Hals</title>
        <meta name="description" content={t('common:metaDescription')} />
        <meta
          name="keywords"
          content="fiolin, opera, klassisk sang, musikk i bryllup, musikk til fest, konserter, julekonsert, violin, sang, duo, Sissel Kyrkjebø, pop, begravelser, norsk, folkemusikk, event, piano, booke sang, booke fiolin, booke søstrene Hals, crossover, julemusikk, Rybak, Oslo, Norge, violin, classical songs, wedding music, party music, concerts, Christmas concert, violin, song, duette, pop, funerals, Norwegian, folk music, event, piano, book song, book violin, book Søstrene Hals, Christmas music, Norway"
        ></meta>
        {/* Add Open Graph meta tags */}
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:type" content="website" />
      </Head>
      <Header />
      <main>
        <>
          <Hero />
          <Clients />
          <Biography />
          <Sisters />
          <PhotoGallery />
          {/* <Julekonsert /> */}

          <Contact />
          <PhotoCollage />
          {/* <Modal /> */}
        </>
      </main>
      <Footer />
    </>
  )
}
