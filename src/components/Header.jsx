import Image from 'next/future/image'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import logoWhite from '@/images/logos/whiteLogo.svg'
import { LanguageButton } from '@/components/LanguageButton'

export function Header() {
  return (
    <header className="relative z-50 flex items-center py-6">
        
        <div className="px-4 pt-4 mx-auto sm:pt-6">
        
        </div>
        <div className="absolute w-full h-24">
          <div className="flex items-center justify-start w-full h-full px-4 sm:px-8"><Image
                  className=""
                  src={logoWhite}
                  width={175}
                  height={35}
                  alt="Søstrene Hals logo"
                /></div>
        </div>
        <div className="absolute w-full h-24"><div className="flex items-center justify-end w-full h-full px-4 sm:px-8"><LanguageButton/></div></div>
    </header>
  )
}
