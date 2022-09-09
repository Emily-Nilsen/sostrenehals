import Image from 'next/future/image'
import { Container } from '@/components/Container'
import { motion } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'

export function Biography() {
  const { t } = useTranslation()

  return (
    <div className="relative pb-10 bg-gradient-to-tr from-nutmeg to-couture-darkGold lg:pb-0">
      {/* Background Image */}
      <div className="relative lg:absolute lg:inset-0">
        <div className="w-full h-full lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <Image
            className="min-h-[70vh] w-auto object-cover drop-shadow-2xl lg:absolute lg:min-h-full"
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1662632487/S%C3%B8strene%20Hals/pink-dresses_tlu5bn.png"
            alt="Susanne og Kathrine Hvinden Hals"
            width={1548}
            height={2064}
            sizes="100vw"
            fill
          />
        </div>
      </div>
      <Container className="relative">
        <div className="relative px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8 lg:pb-24 lg:pt-24">
          <div className="lg:col-start-2 lg:pl-8">
            <div className="mx-auto text-base max-w-prose lg:ml-auto lg:mr-0 lg:max-w-lg">
              <h1 className="inline mt-2 text-5xl font-medium leading-8 tracking-tight text-transparent text-white font-display brightness-110 sm:text-6xl">
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
                className="mt-8 text-lg font-display text-white/70"
              >
                Søstrene Hals består av Kathrine og Susanne Hvinden Hals. De har
                vokst opp i Oslo. Fra de var små har de gått på Barratt Dues
                musikkinstitutt. Begge har senere master i musikk og opera fra
                Royal College of music i London og Det kongelige Danske
                musikkonservatorium i København.
              </motion.p>
              <div className="mt-5 text-lg prose font-display text-white/70">
                <motion.p
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{
                    delay: 0.5,
                    duration: 1,
                    type: 'fade',
                  }}
                >
                  De har spilt sammen siden de var små og har opptrådt i både
                  inn – og utland. Siden 2013 har de hatt en årlig julekonsert i
                  Majorstuen kirke som er veldig populær.
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
                  Selv om de begge er spesialisert i klassisk musikk brenner de
                  også for flere sjangre, blant annet crossovers. Det kan
                  begynne med de vakreste klassiske perler som ender i de
                  tøffeste rytmer. De liker å overraske.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
