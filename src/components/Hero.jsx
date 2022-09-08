import Image from 'next/future/image'
import { SquareButton } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/logos/SHwhitelogo.svg'

export function Hero() {
  return (
    <div className="relative pt-10 pb-20 sm:py-24 min-h-[50vh]">
      <div className="absolute inset-x-0 overflow-hidden bg-gradient-to-br from-couture-darkGold to-nutmeg -top-48 -bottom-14">
        <Image
          className="absolute top-0 left-0 translate-y-[-10%] translate-x-[18%] -scale-x-100 sm:left-1/2 sm:translate-y-[-6%] sm:translate-x-[-20%] lg:translate-x-[-10%] xl:translate-x-[-7%] drop-shadow-2xl"
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
          <h1 className="text-4xl font-light tracking-wider uppercase text-white/90 font-display sm:text-6xl">
            <span className="sr-only">Søstrene Hals </span>Søstrene<span className="block font-serif tracking-tight capitalize text-violin text-7xl sm:text-9xl brightness-150">Hals</span>
          </h1>
          <div className="mt-6 space-y-6 text-2xl tracking-tight text-white/60 font-display max-w-[40vw]">
            <p>
            Duo med sopran og fiolin som starter med de vakreste klassiske perler og ender i de tøffeste rytmer.
            </p>
            <p>
            De liker å overraske.
            </p>
          </div>
          <SquareButton href="#contact" className="mt-20">
            Ta kontakt
          </SquareButton>
          {/* <dl className="grid grid-cols-2 mt-10 gap-y-6 gap-x-10 sm:mt-16 sm:gap-y-10 sm:gap-x-16 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            
          </dl> */}
        </div>
      </Container>
    </div>
  )
}
