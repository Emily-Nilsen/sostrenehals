import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Sponsors } from '@/components/Sponsors'
import {Biography } from '@/components/Biography'
import {SusanneAndKathrine } from '@/components/SusanneAndKathrine'
import { Newsletter } from '@/components/Newsletter'
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'

export default function Home() {
  return (
    <>
      <Head>
        <title>Søstrene Hals</title>
        <meta
          name="description"
          content="At DeceptiConf you’ll learn about the latest dark patterns being developed to trick even the smartest visitors, and you’ll learn how to deploy them without ever being detected."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <Sponsors />
        <Biography/>
        <SusanneAndKathrine />
        {/* <Schedule /> */}
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
