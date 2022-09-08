import Image from 'next/future/image'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import logoWhite from '@/images/logos/whiteLogo.svg'

export function Header() {
  return (
    <header className="relative z-50 pb-11 lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
        <div className="relative w-full h-full pr-1">
                <Image
                  src={logoWhite}
                  width={175}
                  height={35}
                  alt="Søstrene Hals logo"
                />
              </div>
        </div>
        
        {/* <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <Button href="#">Get your tickets</Button>
        </div> */}
      </Container>
    </header>
  )
}
