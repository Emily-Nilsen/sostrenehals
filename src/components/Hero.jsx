import Image from 'next/future/image'
import { ContactButton } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/logos/SHwhitelogo.svg'

export function Hero() {
  return (
    <div className="relative pt-10 pb-20 sm:py-24 min-h-[50vh] md:min-h-[70vh]">
      <div className="absolute inset-x-0 overflow-hidden bg-gradient-to-br from-couture-darkGold to-nutmeg -top-48 -bottom-14">
        
        <Image
          className="absolute bottom-0 right-0 translate-x-[25%] -scale-x-110 sm:-scale-x-100 sm:scale-y-100 scale-y-110 sm:left-1/2 sm:translate-x-[-20%] lg:translate-x-[-10%] xl:translate-x-[-7%] drop-shadow-2xl sm:translate-y-[6%]"
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1662637636/S%C3%B8strene%20Hals/goldCutout_fhrxem.png"
          alt="Søstrene Hals"
          width={918}
          height={1495}
          priority
          unoptimized
        />
              
      </div>
      
      <Container className="relative">
        <div className="max-w-xs sm:mx-auto sm:max-w-2xl lg:max-w-3xl lg:px-12">
          <h1 className="text-5xl font-light tracking-wider uppercase text-white/90 font-display sm:text-6xl">
            <span className="sr-only">Søstrene Hals </span>Søstrene<span className="block font-serif tracking-tight capitalize text-violin text-8xl sm:text-9xl brightness-150">Hals</span>
          </h1>
          <div className="mt-6 mb-20 space-y-6 text-xl sm:text-2xl tracking-tight text-white/60 font-display max-w-[50vw] sm:max-w-[40vw] lg:max-w-lg">
            <p>
            Duo med sopran og fiolin som starter med de vakreste klassiske perler og ender i de tøffeste rytmer.
            </p>
            <p>
            De liker å overraske.
            </p>
          </div>
          <ContactButton href="#contact" className="mt-20">
            Ta kontakt <span aria-hidden="true">&rarr;</span>
          </ContactButton>
          
          
        </div>
      </Container>
    </div>
  )
}
