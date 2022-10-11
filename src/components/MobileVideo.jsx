import Image from 'next/future/image'
import { ContactButton } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/logos/SHwhitelogo.svg'
import { motion } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'
import { VideoPlayer } from './VideoPlayer'

export function MobileVideo() {
  const { t } = useTranslation()

  const hals = ['H', 'a', 'l', 's']

  return (
    <div className="relative h-[calc(100vw*1.25)] w-full">
      <div className="absolute inset-0">
        <VideoPlayer publicId="Emily%20Nilsen/videos/S%C3%B8strene_Hals_mobile_v2_mja3wt" />
      </div>
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{
          delay: 7.2,
          duration: 0.8,
          type: 'fade',
        }}
        className="absolute inset-0"
      >
        <Image
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1665480217/Emily%20Nilsen/videos/S%C3%B8strene_Hals_mobile_hero_oygcoz.webp"
          alt="Søstrene Hals"
          width={1080}
          height={1350}
          unoptimized
        />
      </motion.div>

      <Container className="absolute inset-0 flex h-[calc(100vw*1.25)] w-full items-center">
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{
            delay: 7.2,
            duration: 0.8,
            type: 'fade',
          }}
          className="max-w-xs sm:max-w-2xl"
        >
          <h1 className="text-3xl font-light tracking-wider font-display text-white/100 sm:text-4xl">
            <span className="sr-only">Søstrene Hals </span>SØSTRENE
            <motion.span
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 7.5,
                duration: 0.8,
                type: 'fade',
              }}
              className="block font-serif text-6xl tracking-tight text-violin brightness-150 sm:text-7xl"
            >
              {hals.map((letter, i) => (
                <>
                  <motion.span
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
                    key={i}
                  >
                    {letter}
                  </motion.span>
                </>
              ))}
            </motion.span>
          </h1>
          <div className="mt-6 mb-[5vh] max-w-[50vw] space-y-6 font-display text-base leading-relaxed tracking-tight text-white/70 sm:mb-16 sm:max-w-[40vw] sm:text-lg">
            <p>{t('common:heroText')}</p>
          </div>
          <ContactButton href="#contact">
            {t('common:contactUs')} <span aria-hidden="true">&rarr;</span>
          </ContactButton>
        </motion.div>
      </Container>
    </div>
  )
}
