import { Container } from '@/components/Container'
import Image from 'next/image'
import qrCode from '@/images/Julekonsert_2024.svg'
import useTranslation from 'next-translate/useTranslation'
import { motion } from 'framer-motion'
import { VideoComponent } from './VideoComponent'

function QrCodeBorder(props) {
  return (
    <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
      <path
        d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function Julekonsert() {
  const { t } = useTranslation()

  return (
    <main>
      <section id="julekonsert" aria-labelledby="julekonsert-title">
        <div className="overflow-hidden bg-white">
          <Container>
            <div className="relative mx-auto max-w-7xl px-4 pb-16 sm:px-6 md:pb-32 lg:px-8">
              <div className="absolute bottom-0 left-3/4 top-0 hidden w-screen lg:block" />
              <div className="mx-auto max-w-prose lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
                <div className="prose prose-lg font-display text-lg text-couture-darkGold/90">
                  <h2 className="mb-6 text-4xl font-medium tracking-tighter text-couture-darkGold contrast-200 sm:text-5xl">
                    {t('common:julekonsertTitle')}
                  </h2>
                </div>
              </div>
              <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="relative lg:col-start-2 lg:row-start-1">
                  <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
                    <VideoComponent />
                  </div>
                </div>
                <div className="-mt-8 grid place-content-between lg:mt-0">
                  <div className="prose-darkGold/90 prose prose-lg mx-auto mt-0 font-display text-lg text-couture-darkGold/90 lg:col-start-1 lg:row-start-1 lg:max-w-none">
                    <div>
                      <motion.p
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{
                          delay: 0.5,
                          duration: 1,
                          type: 'fade',
                        }}
                      >
                        {t('common:julekonsert1')}
                      </motion.p>
                      {/* This year, they have with them... */}
                      <motion.p
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{
                          delay: 0.5,
                          duration: 1,
                          type: 'fade',
                        }}
                      >
                        {t('common:julekonsert2')}
                      </motion.p>
                    </div>
                  </div>
                  {/* Barcode and link for tickets below */}
                  <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{
                      opacity: 0,
                      y: 50,
                    }}
                    transition={{
                      delay: 0.5,
                      duration: 1,
                      type: 'fade',
                    }}
                  >
                    <div className="group relative -mx-4 flex items-center self-stretch py-4 transition-colors sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:py-6">
                      <div className="relative flex h-24 w-24 flex-none items-center justify-center">
                        <QrCodeBorder className="group-hover:stroke-eye-green absolute inset-0 h-full w-full stroke-gray-300 transition-colors" />
                        <Image
                          src={qrCode}
                          alt="Julekonsert i Ris kirke med Søstrene Hals"
                          className="overflow-hidden rounded-none p-1"
                          unoptimized
                        />
                      </div>
                      <div className="prose-darkGold/90 prose prose-lg mx-auto ml-8 mt-0 font-display lg:w-64">
                        <a
                          className="group"
                          href="https://www.ticketmaster.no/event/sostrene-hals-inviterer-jul-med-solvguttene-zlatanos-og-tommervik-billetter/2072519196"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <p className="relative z-10 flex text-sm font-normal text-couture-darkGold transition duration-300 ease-in-out">
                            <span className="mr-2 text-base font-semibold text-couture-darkGold">
                              {t('common:julekonsert')}
                            </span>
                            <LinkIcon className="h-6 w-6 flex-none" />
                          </p>
                        </a>

                        <p className="mt-1 text-sm text-couture-darkGold/90">
                          {t('common:julekonsertInfo')}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </main>
  )
}
