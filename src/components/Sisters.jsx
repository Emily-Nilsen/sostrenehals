import Image from 'next/future/image'
import { Container } from '@/components/Container'

export function Sisters() {
  return (
    <div className="relative py-16 overflow-hidden bg-white lg:py-24">
      <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full">
        <div className="relative h-full mx-auto text-lg max-w-prose" aria-hidden="true">
          <svg
            className="absolute transform translate-x-32 top-12 left-full"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
          </svg>
          <svg
            className="absolute transform -translate-x-32 -translate-y-1/2 top-1/2 right-full"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          {/* <svg
            className="absolute transform translate-x-32 bottom-12 left-full"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
          </svg> */}
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        
        <div className="mx-auto mt-6 text-lg prose prose-lg text-couture-darkGold/90 font-display prose-indigo">
          
          <h2 className="text-4xl leading-8 tracking-tight text-eyelashes/90 sm:text-5xl">Susanne</h2>
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
          <h2 className="text-4xl leading-8 tracking-tight text-eyelashes/90 sm:text-5xl">Kathrine</h2>
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
