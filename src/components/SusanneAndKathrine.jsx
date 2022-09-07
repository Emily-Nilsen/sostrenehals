import Image from 'next/future/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/hals-ballroom.png'
import { CameraIcon } from '@heroicons/react/20/solid'

export function SusanneAndKathrine() {
  return (
    <div className="overflow-hidden bg-white">
      <div className="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        <div className="mx-auto text-base max-w-prose lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
          <div>
            
            <h3 className="mt-2 text-4xl font-medium leading-8 tracking-tighter text-couture-darkGold sm:text-5xl font-display contrast-150">Susanne</h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:col-start-2 lg:row-start-1">
            
            <div className="relative mx-auto text-base max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <div className="object-cover object-center rounded-lg shadow-lg">
                  <Image
                    className="rounded-lg"
                    src={backgroundImage}
                    alt="Susanne Hvinden Hals og Kathrine Hals"
                    width={1184}
                    height={1376}
                  />
                  </div>
                </div>
                <figcaption className="flex mt-3 text-sm text-couture-darkGold font-display">
                  <CameraIcon className="flex-none w-5 h-5 text-nutmeg" aria-hidden="true" />
                  <span className="ml-2">Susanne og Kathrine Hvinden Hals</span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="mx-auto text-lg max-w-prose lg:max-w-none">
              <p className="text-lg text-couture-darkGold/90 font-display">
              Susanne Hvinden Hals er en sopran utdannet ved Griegakademiet i Bergen og ved Det kongelige Danske musikkonservatorium i København. Hun har gjennom årene sunget roller som Susanna i Mozarts «Le nozze di Figaro», Adele i «Die Fledermaus» m.m. 
              </p>
            </div>
            <div className="mx-auto mt-5 text-lg prose text-couture-darkGold/90 font-display lg:col-start-1 lg:row-start-1 lg:max-w-none">
              <p>
              I 2003 debuterte hun sammen med Det norske jentekor på Operaen i Montpellier i Frankrike. Hennes prestasjoner og profesjonelle sangferdigheter har ført til at Susanne er en svært ettertraktet sopran i Norge.
              </p>
              <p>
              Dessuten synger hun ofte med kor og orkestre som solist i Oratorier, deltatt på forskjellige festivaler og konserter i Norge og i utlandet, som Malaga Clasica i Spania.
              </p>
              
              <h3 className="mt-16 text-4xl font-medium leading-8 tracking-tighter text-couture-darkGold sm:text-5xl font-display contrast-150">Kathrine</h3>
              <div>
              <p className="text-lg text-couture-darkGold/90 font-display">
              Kathrine Hvinden Hals er en klassisk fiolinist utdannet gjennom Barratt Dues Musikkinstitutt i Oslo og tok videre mastergrad ved Royal College of Music i London.
              </p>
              <p>
              Hun har gjennom årene vunnet en rekke priser, deltatt på flere musikkfestivaler og undervist på kurs både her hjemme og i utlandet.
              </p>
              <p>Kathrine var også invitert med til Alexander Rybaks internasjonale konsertturne i kjølvannet av Grand Prix seieren i 2010. Ved siden av sin klassiske utdannelse opptrer hun stadig på offentlige og private arrangementer.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
