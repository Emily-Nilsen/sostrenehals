import Image from 'next/future/image'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { LanguageButton } from '@/components/LanguageButton'
import { motion } from 'framer-motion'

export function Header() {
  return (
    <motion.header
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{
        delay: 7,
        duration: 0.8,
        type: 'fade',
      }}
      className="absolute top-0 left-0 z-50 flex items-center w-full py-6"
    >
      <div className="relative px-4 pt-4 mx-auto sm:pt-6"></div>
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
    </motion.header>
  )
}
