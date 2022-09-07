import { Container } from '@/components/Container'
import logoNutmegLong from '@/images/logos/nutmegLogoLong.svg'
import Image from 'next/image'
import { Logo } from '@/components/Logo'

export function Footer() {
  return (
    <footer className="py-16">
      <Container className="flex flex-col items-center justify-between md:flex-row">
      <div className="relative h-full pr-1">
                <Image
                  src={logoNutmegLong}
                  width={175}
                  height={35}
                  alt="Søstrene Hals logo"
                />
              </div>
        <p className="mt-6 text-base text-nutmeg md:mt-0">
          Copyright &copy; {new Date().getFullYear()} Søstrene Hals
        </p>
      </Container>
    </footer>
  )
}
