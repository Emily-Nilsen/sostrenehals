import Image from 'next/future/image'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/logos/lightGoldLogo.svg'

export function Sisters() {
  return (
    <div className="relative py-16 overflow-hidden bg-white lg:py-24">
      <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full">
        <div className="relative h-full mx-auto text-lg max-w-prose" aria-hidden="true">
          
          <Image className="absolute transform translate-x-20 opacity-50 top-12 left-full" src={backgroundImage} alt="logo" unoptimized />
          <Image className="absolute transform -translate-x-20 -translate-y-1/2 opacity-50 top-1/2 right-full" src={backgroundImage} alt="logo" unoptimized />
          
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        
        <div className="mx-auto mt-6 text-lg prose prose-lg text-couture-darkGold/90 font-display prose-indigo">
          
          <h2 className="text-4xl font-medium tracking-tighter text-couture-darkGold sm:text-5xl contrast-200">Susanne</h2>
          <p>
          Susanne Hvinden Hals er en sopran utdannet ved Griegakademiet i Bergen og ved Det kongelige Danske musikkonservatorium i København. Hun har gjennom årene sunget roller som Susanna i Mozarts «Le nozze di Figaro», Adele i «Die Fledermaus» m.m.
          </p>
          {/* <blockquote>
            <p>
              Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique
              pellentesque. Blandit amet, sed aenean erat arcu morbi.
            </p>
          </blockquote> */}
          <p>
              I 2003 debuterte hun sammen med Det norske jentekor på Operaen i Montpellier i Frankrike. Hennes prestasjoner og profesjonelle sangferdigheter har ført til at Susanne er en svært ettertraktet sopran i Norge.
              </p>
              <p>
              Dessuten synger hun ofte med kor og orkestre som solist i Oratorier, deltatt på forskjellige festivaler og konserter i Norge og i utlandet, som Málaga Clásica i Spania.
              </p>
          <figure>
            <Image
              className="w-full rounded-lg lg:mt-16"
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1662639618/S%C3%B8strene%20Hals/hals_ballroom_pg3dkp.webp"
              alt="Susanne og Kathrine Hvinden Hals"
              width={792}
              height={594}
            />
            <figcaption className="flex items-center mt-3 text-couture-darkGold">Susanne og Kathrine Hvinden Hals</figcaption>
          </figure>
          <h2 className="text-4xl font-medium tracking-tighter text-couture-darkGold sm:text-5xl contrast-200">Kathrine</h2>
          <p>
          Kathrine Hvinden Hals er en klassisk fiolinist utdannet gjennom Barratt Dues Musikkinstitutt i Oslo og tok videre mastergrad ved Royal College of Music i London.
          </p>
          <p>
              Hun har gjennom årene vunnet en rekke priser, deltatt på flere musikkfestivaler og undervist på kurs både her hjemme og i utlandet.
              </p>
              <p>Kathrine var også invitert med til Alexander Rybaks internasjonale konsertturne i kjølvannet av Grand Prix seieren i 2010. Ved siden av sin klassiske utdannelse opptrer hun stadig på offentlige og private arrangementer.</p>
        </div>
      </div>
    </div>
  )
}
