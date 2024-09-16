import Image from 'next/future/image'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { LanguageButton } from '@/components/LanguageButton'

export function Header() {
  return (
    <header className="relative z-10 flex items-center py-6">
      <div className="relative mx-auto px-4 pt-4 sm:pt-6"></div>
      <div className="absolute">
        <div className="hidden h-full w-full items-center justify-start px-4 sm:px-8 md:flex">
          <Image
            src="/whiteLogo.svg"
            width={175}
            height={35}
            alt="Søstrene Hals logo"
          />
        </div>
        <div className="flex h-full w-full items-center justify-start px-4 sm:px-8 md:hidden">
          <Image
            src="/SHwhitelogo.svg"
            width={30}
            height={30}
            alt="Søstrene Hals logo"
          />
        </div>
      </div>
      <div className="absolute h-24 w-full">
        <div className="flex h-full w-full items-center justify-end px-4 sm:px-8">
          <LanguageButton />
        </div>
      </div>
    </header>
  )
}
