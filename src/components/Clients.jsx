import Image from 'next/future/image'
import { Container } from '@/components/Container'
import { motion } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'

import logoDnb from '@/images/logos/DnB.svg'
import logoMef from '@/images/logos/MEF.svg'
import logoArctic from '@/images/logos/ArcticSecurities.svg'
import logoNeed from '@/images/logos/NeedMusic.svg'
import logoNorgesGruppen from '@/images/logos/NorgesGruppen.svg'
import logoBirger from '@/images/logos/Birger.svg'

const clients = [
  { name: 'DNB', logo: logoDnb },
  { name: 'MEF', logo: logoMef },
  { name: 'ArcticSecurities', logo: logoArctic },
  { name: 'NeedMusic', logo: logoNeed },
  { name: 'NorgesGruppen', logo: logoNorgesGruppen },
  { name: 'Birger', logo: logoBirger },
]

export function Clients() {
  const { t } = useTranslation()

  return (
    <section id="clients" aria-label="Clients" className="pt-24 pb-20 sm:py-32">
      <Container>
        <h2 className="max-w-2xl mx-auto text-3xl font-medium tracking-tighter text-center font-display text-couture-darkGold contrast-150 sm:text-4xl md:text-5xl">
          {t('common:pastClients')}
        </h2>
        <div className="grid grid-cols-1 mx-auto mt-12 max-w-max place-content-center gap-y-6 gap-x-32 sm:mt-20 sm:grid-cols-3 sm:gap-y-12 md:gap-x-16 lg:gap-x-32">
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
