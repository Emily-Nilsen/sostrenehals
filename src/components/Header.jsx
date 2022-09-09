import Image from 'next/future/image'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { LanguageButton } from '@/components/LanguageButton'

export function Header() {
  return (
    <header className="relative z-50 flex items-center py-6">
      <div className="px-4 pt-4 mx-auto sm:pt-6"></div>
      <div className="absolute">
        <div className="items-center justify-start hidden w-full h-full px-4 sm:px-8 md:flex">
          <Image
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1662658748/S%C3%B8strene%20Hals/whiteLogo_ly1puy.svg"
            width={175}
            height={35}
            alt="Søstrene Hals logo"
          />
        </div>
        <div className="flex items-center justify-start w-full h-full px-4 sm:px-8 md:hidden">
          <Image
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1662658746/S%C3%B8strene%20Hals/SHwhitelogo_up7mbt.svg"
            width={30}
            height={30}
            alt="Søstrene Hals logo"
          />
        </div>
      </div>
      <div className="absolute w-full h-24">
        <div className="flex items-center justify-end w-full h-full px-4 sm:px-8">
          <LanguageButton />
        </div>
      </div>
    </header>
  )
}
