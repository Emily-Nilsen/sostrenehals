import Image from 'next/future/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/logos/SHwhitelogo.svg'
import cutoutImage from '@/images/cutout.png'

export function Hero() {
  return (
    <div className="relative pt-10 pb-20 sm:py-24">
      <div className="absolute inset-x-0 overflow-hidden bg-gradient-to-br from-couture-darkGold to-nutmeg -top-48 -bottom-14">
        <Image
          className="absolute top-0 left-0 translate-y-[-10%] translate-x-[18%] -scale-x-100 sm:left-1/2 sm:translate-y-[-6%] sm:translate-x-[-20%] lg:translate-x-[-10%] xl:translate-x-[-7%]"
          src={cutoutImage}
          alt="Søstrene Hals"
          width={918}
          height={1495}
          priority
          unoptimized
        />
        
      </div>
      
      {/* Background Image */}
      {/* <div className="absolute inset-x-0 overflow-hidden -top-48 -bottom-14 bg-t ">
        <Image
          className="absolute top-0 left-0 translate-y-[-10%] translate-x-[-55%] -scale-x-100 sm:left-1/2 sm:translate-y-[-6%] sm:translate-x-[-98%] lg:translate-x-[-106%] xl:translate-x-[-122%] blur-lg opacity-30"
          src={backgroundImage}
          alt=""
          width={918}
          height={918}
          priority
          unoptimized
        />
      </div> */}
      
      <Container className="relative">
        <div className="max-w-xs sm:mx-auto sm:max-w-2xl lg:max-w-3xl lg:px-12">
          <h1 className="text-4xl font-light tracking-wider uppercase text-white/90 font-display sm:text-6xl">
            <span className="sr-only">Søstrene Hals </span>Søstrene<span className="block font-serif tracking-tight capitalize text-violin text-7xl sm:text-9xl brightness-125">Hals</span>
          </h1>
          <div className="mt-6 space-y-6 text-2xl tracking-tight text-white/60 font-display max-w-[40vw]">
            <p>
              Just a little bit of writing here?
            </p>
            <p>
              And also a little bit of writing here, too.
            </p>
          </div>
          {/* <Button href="#" className="w-full mt-10 sm:hidden">
            Get your tickets
          </Button> */}
          <dl className="grid grid-cols-2 mt-10 gap-y-6 gap-x-10 sm:mt-16 sm:gap-y-10 sm:gap-x-16 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {/* {[
              ['Speakers', '18'],
              ['People Attending', '2,091'],
              ['Venue', 'Staples Center'],
              ['Location', 'Los Angeles'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-t">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-t">
                  {value}
                </dd>
              </div>
            ))} */}
          </dl>
        </div>
      </Container>
    </div>
  )
}
