import Image from 'next/image'

import { Container } from '@/components/Container'
import { motion } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'
import { SpotifyPlayer } from './SpotifyPlayer'
import { YoutubeVideo } from './YoutubeVideo'

export function Biography() {
  const { t } = useTranslation()

  return (
    <div className="relative bg-gradient-to-tr from-nutmeg to-couture-darkGold pb-10 lg:pb-0">
      {/* Background Image */}
      <div className="relative lg:absolute lg:inset-0">
        <div className="h-full w-full lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <Image
            className="min-h-[70vh] w-auto object-cover drop-shadow-2xl lg:absolute lg:min-h-full"
            src="/pink-dresses.webp"
            alt="Susanne og Kathrine Hvinden Hals"
            width={1548}
            height={2064}
            sizes="100vw"
            fill={true} // Explicitly set fill to true
            unoptimized
          />
        </div>
      </div>
      <Container className="relative">
        <div className="relative px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8 lg:pb-24 lg:pt-24">
          <div className="lg:col-start-2 lg:pl-8">
            <div className="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
              <h1 className="mt-2 inline font-display text-5xl font-medium leading-8 tracking-tight text-transparent text-white brightness-110 sm:text-6xl">
                Søstrene Hals
              </h1>
              <motion.p
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 1,
                  type: 'fade',
                }}
                className="mt-8 font-display text-lg text-white/70"
              >
                {t('common:commonBioLine1')}
              </motion.p>
              <div className="prose mt-5 font-display text-lg text-white/70">
                <motion.p
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{
                    delay: 0.5,
                    duration: 1,
                    type: 'fade',
                  }}
                >
                  {t('common:commonBioLine2')}
                </motion.p>
                <motion.p
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{
                    delay: 0.5,
                    duration: 1,
                    type: 'fade',
                  }}
                >
                  {t('common:commonBioLine3')}
                </motion.p>
              </div>
            </div>
            <div className="aspect-video relative mt-10 w-full rounded-2xl object-cover">
              <YoutubeVideo publicId="https://youtu.be/TAqPhOHex6M?si=8n2TSf4DxGbu6ADz" />
            </div>
            {/* Spotify widgets */}
            <div className="relative mt-16">
              <SpotifyPlayer spotifyUri="track/3cU4oFFA61XbHnhJWrAo8E?si=56e74304a89342f7" />
            </div>
            <div className="relative mt-10">
              <SpotifyPlayer spotifyUri="track/1TkO5LMfw6hzVVydZDpcBG?si=7cme6e_wT_WWzj4DRw0Jjw" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
