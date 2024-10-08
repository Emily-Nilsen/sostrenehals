import Image from 'next/future/image'
import { AtSymbolIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { motion } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'

function ArrowRightIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path
        d="m14 7 5 5-5 5M19 12H5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" aria-label="Contact">
      <Container>
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
          className="relative -mx-4 overflow-hidden bg-couture-lightGold/50 px-4 py-14 sm:-mx-6 sm:px-6 sm:py-20 md:mx-0 md:rounded-5xl md:px-16 xl:px-24 xl:py-36"
        >
          <Image
            className="absolute left-1/2 top-0 translate-x-[-10%] translate-y-[-45%] opacity-60 blur-sm lg:translate-x-[-32%]"
            src="/SHwhitelogo.svg"
            alt="Søstrene Hals logo"
            width={919}
            height={1351}
            unoptimized
          />
          <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 font-display xl:max-w-none xl:grid-cols-2">
            <div>
              <p className="text-4xl font-medium tracking-tighter text-couture-darkGold contrast-200 sm:text-5xl">
                {t('common:contactTitle')}
              </p>
              <p className="mt-4 text-lg tracking-tight text-couture-darkGold">
                {t('common:contactLine1')}
              </p>
              <p className="mt-4 text-lg tracking-tight text-couture-darkGold">
                {t('common:contactLine2')}
              </p>
              <p className="mt-4 text-lg tracking-tight text-couture-darkGold">
                {t('common:contactLine3')}
              </p>
            </div>
            <div>
              <div>
                <dl>
                  <h3 className="text-lg font-semibold tracking-tight text-couture-darkGold contrast-200">
                    {t('common:ringUs')} <span aria-hidden="true">&darr;</span>
                  </h3>
                  <a
                    className="group mt-5 flex rounded-3xl bg-white/50 px-6 py-4 text-couture-darkGold shadow-xl shadow-couture-darkGold/5 transition duration-300 ease-in-out hover:bg-white/100"
                    href="tel:+4745506256"
                    rel="noopener noreferrer"
                  >
                    <div className="h-full w-full overflow-hidden ">
                      <dt className="sr-only">Phone number</dt>
                      <dd className="flex items-center">
                        <PhoneIcon
                          className="h-6 w-6 flex-shrink-0 text-nutmeg transition duration-300 ease-in-out group-hover:text-lipstick-light group-hover:brightness-150"
                          aria-hidden="true"
                        />
                        <span className="ml-3 transition duration-300 ease-in-out group-hover:text-eyelashes">
                          455 06 256
                        </span>
                      </dd>
                    </div>
                  </a>
                  <h3 className="mt-10 text-lg font-semibold tracking-tight text-couture-darkGold contrast-200">
                    {t('common:emailUs')} <span aria-hidden="true">&darr;</span>
                  </h3>
                  <a
                    className="group mt-5 flex rounded-3xl bg-white/50 px-6 py-4 text-couture-darkGold shadow-xl shadow-couture-darkGold/5 transition duration-300 ease-in-out hover:bg-white/100"
                    href="mailto:sostrenehals@gmail.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="group">
                      <dt className="sr-only">Email</dt>
                      <dd className="flex items-center">
                        <AtSymbolIcon
                          className="h-6 w-6 flex-shrink-0 text-nutmeg transition duration-300 ease-in-out group-hover:text-lipstick-light group-hover:brightness-150"
                          aria-hidden="true"
                        />
                        <span className="ml-3 transition duration-300 ease-in-out group-hover:text-eyelashes">
                          sostrenehals@gmail.com
                        </span>
                      </dd>
                    </div>
                  </a>
                </dl>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
