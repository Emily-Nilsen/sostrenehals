import Image from 'next/future/image'
import backgroundImage from '@/images/logos/lightGoldLogo.svg'
import { motion } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'

export function Sisters() {
  const { t } = useTranslation()

  return (
    <div className="relative overflow-hidden bg-white pb-12 pt-8 sm:py-16 lg:py-24">
      <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full">
        <div
          className="relative mx-auto h-full max-w-prose text-lg"
          aria-hidden="true"
        >
          <Image
            className="absolute left-full top-12 translate-x-20 transform opacity-50 blur-sm"
            src={backgroundImage}
            alt="logo"
            unoptimized
          />
          <Image
            className="absolute right-full top-1/2 -translate-x-20 -translate-y-1/2 transform opacity-50 blur-sm"
            src={backgroundImage}
            alt="logo"
            unoptimized
          />
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg prose-indigo mx-auto mt-6 font-display text-lg text-couture-darkGold/90">
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
          {/* <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://susannehals.com"
            className="font-bold transition-colors duration-200 ease-in-out text-couture-darkGold hover:text-couture-darkGold/80"
          >
            susannehals.com
          </Link> */}
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
              className="mt-14 w-full rounded-lg lg:mt-16"
              src="/image_06_flowers.webp"
              alt="Susanne og Kathrine Hvinden Hals"
              width={792}
              height={594}
              // unoptimized
            />
            <figcaption className="-mb-6 mt-3 flex items-center text-couture-darkGold">
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
