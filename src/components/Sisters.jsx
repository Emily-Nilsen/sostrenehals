import Image from 'next/future/image'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/logos/lightGoldLogo.svg'
import { motion } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'

export function Sisters() {
  const { t } = useTranslation()

  return (
    <div className="relative pt-8 pb-12 overflow-hidden bg-white sm:py-16 lg:py-24">
      <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full">
        <div
          className="relative h-full mx-auto text-lg max-w-prose"
          aria-hidden="true"
        >
          <Image
            className="absolute transform translate-x-20 opacity-50 top-12 left-full blur-sm"
            src={backgroundImage}
            alt="logo"
            unoptimized
          />
          <Image
            className="absolute transform -translate-x-20 -translate-y-1/2 opacity-50 top-1/2 right-full blur-sm"
            src={backgroundImage}
            alt="logo"
            unoptimized
          />
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mt-6 text-lg prose prose-lg prose-indigo font-display text-couture-darkGold/90">
          <h2 className="mb-6 text-4xl font-medium tracking-tighter text-couture-darkGold contrast-200 sm:text-5xl">
            Susanne
          </h2>
          <motion.p
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              delay: 0.5,
              duration: 1,
              type: 'fade',
            }}
          >
            {t('common:susanneLine1')}
          </motion.p>

          <motion.p
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              delay: 0.5,
              duration: 1,
              type: 'fade',
            }}
          >
            {t('common:susanneLine2')}
          </motion.p>
          <motion.p
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              delay: 0.5,
              duration: 1,
              type: 'fade',
            }}
          >
            {t('common:susanneLine3')}
          </motion.p>
          <motion.figure
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              delay: 0.5,
              duration: 1,
              type: 'fade',
            }}
          >
            <Image
              className="w-full rounded-lg mt-14 lg:mt-16"
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1662639618/S%C3%B8strene%20Hals/hals_ballroom_pg3dkp.webp"
              alt="Susanne og Kathrine Hvinden Hals"
              width={792}
              height={594}
            />
            <figcaption className="flex items-center mt-3 -mb-6 text-couture-darkGold">
              {t('common:commonBioImageText')}
            </figcaption>
          </motion.figure>
          <h2 className="mb-6 text-4xl font-medium tracking-tighter text-couture-darkGold contrast-200 sm:text-5xl">
            Kathrine
          </h2>
          <motion.p
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              delay: 0.5,
              duration: 1,
              type: 'fade',
            }}
          >
            {t('common:kathrineLine1')}
          </motion.p>
          <motion.p
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              delay: 0.5,
              duration: 1,
              type: 'fade',
            }}
          >
            {t('common:kathrineLine2')}
          </motion.p>
        </div>
      </div>
    </div>
  )
}
