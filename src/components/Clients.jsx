import Image from 'next/future/image'
import { Container } from '@/components/Container'
import { motion } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'

import logoDnb from '@/images/logos/DnB.svg'
import logoMef from '@/images/logos/MEF.svg'
import logoArctic from '@/images/logos/ArcticSecurities.svg'
import logoNeed from '@/images/logos/NeedMusic.svg'
import logoLangaard from '@/images/logos/langaard-logo-full.svg'
import logoNorgesGruppen from '@/images/logos/NorgesGruppen.svg'
import logoBirger from '@/images/logos/Birger.svg'
import logoMalling from '@/images/logos/Malling.svg'
import logoSølvguttene from '@/images/logos/Sølvguttene.svg'
import logoWilhelmsen from '@/images/logos/Wilhelmsen.svg'
import logoEstateMedia from '@/images/logos/estate_media.svg'

const clients = [
  { name: 'DNB', logo: logoDnb },
  { name: 'Sølvguttene', logo: logoSølvguttene },
  { name: 'ArcticSecurities', logo: logoArctic },
  { name: 'Langaard', logo: logoLangaard },
  { name: 'NorgesGruppen', logo: logoNorgesGruppen },
  { name: 'Malling', logo: logoMalling },
  { name: 'Wilhelmsen', logo: logoWilhelmsen },
  { name: 'EstateMedia', logo: logoEstateMedia },
]

export function Clients() {
  const { t } = useTranslation()

  return (
    <section id="clients" aria-label="Clients" className="pb-20 pt-24 sm:py-32">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-display text-3xl font-medium tracking-tighter text-couture-darkGold contrast-150 sm:text-4xl md:text-5xl">
          {t('common:pastClients')}
        </h2>
        <div className="mx-auto mt-12 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-6 sm:mt-20 sm:grid-cols-3 sm:gap-y-12 md:gap-x-16 lg:gap-x-32">
          {clients.map((client, i) => (
            <motion.div
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                initialDelay: 0.3,
                duration: 0.7,
                delay: i * 0.3,
                ease: 'easeOut',
              }}
              key={i}
              className="flex items-center justify-center"
            >
              <Image
                className="h-2/3 sm:h-full"
                src={client.logo}
                alt={client.name}
                unoptimized
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
