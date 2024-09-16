import Image from 'next/future/image'
import { ContactButton } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/logos/SHwhitelogo.svg'
import { motion } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'

export function Hero() {
  const { t } = useTranslation()

  const hals = ['H', 'a', 'l', 's']

  return (
    <div className="relative max-h-screen min-h-[50vh] pb-20 pt-10 sm:min-h-[768px] sm:py-24 md:max-h-[768px]">
      <div className="absolute inset-x-0 -bottom-14 -top-48 overflow-hidden bg-gradient-to-br from-couture-darkGold to-nutmeg">
        <Image
          className="absolute bottom-0 right-0 translate-x-[30%] translate-y-[2%] -scale-x-110 scale-y-110 drop-shadow-2xl sm:left-1/2 sm:translate-x-[-20%] sm:translate-y-[4%] sm:-scale-x-100 sm:scale-y-100 md:translate-y-[18%] md:-scale-x-75 md:scale-y-75 lg:translate-x-[-10%] xl:translate-x-[-7%]"
          src="/goldCutout.webp"
          alt="Søstrene Hals"
          width={918}
          height={1495}
          priority
          unoptimized
        />
      </div>

      <Container className="relative flex h-full items-center">
        <div className="max-w-xs sm:max-w-2xl lg:mx-auto lg:max-w-3xl lg:px-12">
          <h1 className="font-display text-4xl font-light tracking-wider text-white/100 sm:text-5xl md:text-6xl">
            <span className="sr-only">Søstrene Hals </span>SØSTRENE
            <span className="block font-serif text-7xl tracking-tight text-violin brightness-150 sm:text-8xl md:text-9xl">
              {hals.map((letter, i) => (
                <motion.span
                  key={i} // This provides a unique key for each span
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.2,
                    ease: 'easeIn',
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          </h1>
          <div className="mb-[5vh] mt-6 max-w-[55vw] space-y-6 font-display text-lg tracking-tight text-white/70 sm:mb-16 sm:max-w-[40vw] sm:text-xl md:text-2xl lg:max-w-lg">
            <p>{t('common:heroText')}</p>
          </div>
          <ContactButton href="#contact">
            {t('common:contactUs')} <span aria-hidden="true">&rarr;</span>
          </ContactButton>
        </div>
      </Container>
    </div>
  )
}
