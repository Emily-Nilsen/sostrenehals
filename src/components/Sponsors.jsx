import Image from 'next/future/image'
import { Container } from '@/components/Container'

import logoDnb from '@/images/logos/DnB.svg'
import logoMef from '@/images/logos/MEF.svg'
import logoArctic from '@/images/logos/ArcticSecurities.svg'
import logoNeed from '@/images/logos/NeedMusic.svg'
import logoNorgesGruppen from '@/images/logos/NorgesGruppen.svg'

const sponsors = [
  { name: 'DNB', logo: logoDnb },
  { name: 'MEF', logo: logoMef },
  { name: 'ArcticSecurities', logo: logoArctic },
  { name: 'NeedMusic', logo: logoNeed },
  { name: 'NorgesGruppen', logo: logoNorgesGruppen },
  { name: 'DNB', logo: logoDnb },
]

export function Sponsors() {
  return (
    <section id="sponsors" aria-label="Sponsors" className="py-20 sm:py-32">
      <Container>
        <h2 className="max-w-2xl mx-auto text-4xl font-medium tracking-tighter text-center font-display text-couture-darkGold sm:text-5xl contrast-150">
          Current sponsorships for our workshops and speakers.
        </h2>
        <div className="grid grid-cols-1 mx-auto mt-20 max-w-max place-content-center gap-y-12 gap-x-32 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center"
            >
              <Image src={sponsor.logo} alt={sponsor.name} unoptimized />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
