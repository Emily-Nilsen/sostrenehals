import Image from 'next/future/image'
import { ContactButton } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/logos/SHwhitelogo.svg'
import { motion } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'

export function Hero() {
  const { t } = useTranslation()
  return (
    <div className="relative max-h-screen min-h-[50vh] pt-10 pb-20 sm:py-24 md:min-h-[70vh]">
      <div className="absolute inset-x-0 overflow-hidden -top-48 -bottom-14 bg-gradient-to-br from-couture-darkGold to-nutmeg">
        <Image
          className="absolute bottom-0 right-0 translate-x-[30%] translate-y-[-10%] -scale-x-125 scale-y-125 drop-shadow-2xl sm:left-1/2 sm:translate-x-[-20%] sm:translate-y-[6%] sm:-scale-x-100 sm:scale-y-100 lg:translate-x-[-10%] xl:translate-x-[-7%]"
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1662637636/S%C3%B8strene%20Hals/goldCutout_fhrxem.png"
          alt="Søstrene Hals"
          width={918}
          height={1495}
          priority
          unoptimized
        />
      </div>

      <Container className="relative">
        <div className="max-w-xs sm:mx-auto sm:max-w-2xl lg:max-w-3xl lg:px-12">
          <h1 className="text-4xl font-light tracking-wider uppercase font-display text-white/100 sm:text-5xl md:text-6xl">
            <span className="sr-only">Søstrene Hals </span>Søstrene
            <span className="block font-serif tracking-tight capitalize text-7xl text-violin brightness-150 sm:text-8xl md:text-9xl">
              Hals
            </span>
          </h1>
          <div className="mt-6 mb-[5vh] max-w-[50vw] space-y-6 font-display text-lg tracking-tight text-white/70 sm:mb-16 sm:max-w-[40vw] sm:text-xl md:text-2xl lg:max-w-lg">
            <p>{t('common:heroTextOne')}</p>
            <p>{t('common:heroTextTwo')}</p>
          </div>
          <ContactButton href="#contact">
            {t('common:contactUs')} <span aria-hidden="true">&rarr;</span>
          </ContactButton>
        </div>
      </Container>
    </div>
  )
}
