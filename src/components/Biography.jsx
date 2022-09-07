import Image from 'next/future/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/pink-dresses.png'

export function Biography() {
  return (
    <div className="relative bg-gradient-to-tr from-nutmeg to-couture-darkGold">
      {/* Background Image */}
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <Image
            className="object-cover w-full h-full lg:absolute lg:h-full drop-shadow-lg"
            src={backgroundImage}
            alt=""
          />
        </div>
      </div>
      <div className="relative px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className="lg:col-start-2 lg:pl-8">
          <div className="mx-auto text-base max-w-prose lg:ml-auto lg:mr-0 lg:max-w-lg">
            
            <h1 className="mt-2 text-4xl font-medium leading-8 tracking-tighter text-white sm:text-5xl font-display">Søstrene Hals</h1>
            <p className="mt-8 text-lg font-display text-white/60">
            Søstrene Hals består av Kathrine og Susanne Hvinden Hals. De har vokst opp i Oslo. Fra de var små har de gått på Barratt Dues musikkinstitutt. Begge har senere master i musikk og opera fra Royal College of music i London og Det kongelige Danske musikkonservatorium i København.
            </p>
            <div className="mt-5 text-lg prose text-white/60 font-display">
              <p>
              De har spilt sammen siden de var små og har opptrådt i både inn – og utland. Siden 2013 har de hatt en årlig julekonsert i Majorstuen kirke som er veldig populær.
              </p>
              <p>
              Selv om de begge er spesialisert i klassisk musikk brenner de også for flere sjangre, blant annet crossovers. Det kan begynne med de vakreste klassiske perler som ender i de tøffeste rytmer. De liker å overraske.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
