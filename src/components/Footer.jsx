import { Container } from '@/components/Container'
import logoNutmegLong from '@/images/logos/nutmegLogoLong.svg'
import Image from 'next/image'
import { SocialLinks } from '@/components/SocialLinks'
import { ToTopButton } from '@/components/Button'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="py-16 font-display">
      <Container className="flex flex-col items-center justify-between md:flex-row">
        <ToTopButton href="/">
          <div className="relative h-full pr-1">
            <Image
              src={logoNutmegLong}
              width={175}
              height={35}
              alt="Søstrene Hals logo"
            />
          </div>
        </ToTopButton>
        <SocialLinks />
        <p className="mt-6 text-base text-nutmeg md:mt-0">
          &copy; {new Date().getFullYear()} Søstrene Hals.{' '}
          {t('common:utviklet')}{' '}
          <Link
            href="https://norsknett.no"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer hover:underline"
          >
            Norsk Nett
          </Link>
          .
        </p>
      </Container>
    </footer>
  )
}
