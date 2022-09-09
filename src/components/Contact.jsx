import Image from 'next/future/image'
import { AtSymbolIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

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
  return (
    <section id="contact" aria-label="Contact">
      <Container>
        <div className="relative px-4 -mx-4 overflow-hidden bg-couture-lightGold/50 py-14 sm:-mx-6 sm:py-20 sm:px-6 md:mx-0 md:rounded-5xl md:px-16 xl:px-24 xl:py-36">
          <Image
            className="absolute left-1/2 top-0 translate-x-[-10%] translate-y-[-45%] opacity-60 blur-sm lg:translate-x-[-32%]"
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1662658746/S%C3%B8strene%20Hals/SHwhitelogo_up7mbt.svg"
            alt="Søstrene Hals logo"
            width={919}
            height={1351}
            unoptimized
          />
          <div className="relative grid max-w-2xl grid-cols-1 mx-auto gap-x-32 gap-y-14 font-display xl:max-w-none xl:grid-cols-2">
            <div>
              <p className="text-4xl font-semibold tracking-tighter text-couture-darkGold contrast-150 sm:text-5xl">
                Ta kontakt
              </p>
              <p className="mt-4 text-lg tracking-tight text-couture-darkGold">
                Engasjer Søstrene Hals til ditt neste arrangement og gjør dette
                til en uforglemmelig opplevelse.
              </p>
              <p className="mt-4 text-lg tracking-tight text-couture-darkGold">
                Ring oss eller ta kontakt via e-post, så kommer vi tilbake til
                deg så snart som mulig.
              </p>
              <p className="mt-4 text-lg tracking-tight text-couture-darkGold">
                Vi gleder oss til å høre fra deg!
              </p>
            </div>
            <div>
              <div>
                <dl>
                  <h3 className="text-lg font-semibold tracking-tight text-couture-darkGold contrast-200">
                    Ring oss <span aria-hidden="true">&darr;</span>
                  </h3>
                  <a
                    className="flex px-6 py-4 mt-5 transition duration-300 ease-in-out shadow-xl group rounded-3xl bg-white/50 text-couture-darkGold shadow-couture-darkGold/5 hover:bg-white/100"
                    href="tel:+4745506256"
                    rel="noopener noreferrer"
                  >
                    <div className="w-full h-full overflow-hidden ">
                      <dt className="sr-only">Phone number</dt>
                      <dd className="flex items-center">
                        <PhoneIcon
                          className="flex-shrink-0 w-6 h-6 transition duration-300 ease-in-out text-nutmeg group-hover:text-lipstick-light group-hover:brightness-150"
                          aria-hidden="true"
                        />
                        <span className="ml-3 transition duration-300 ease-in-out group-hover:text-eyelashes">
                          455 06 256
                        </span>
                      </dd>
                    </div>
                  </a>
                  <h3 className="mt-10 text-lg font-semibold tracking-tight text-couture-darkGold contrast-200">
                    Send oss en e-post <span aria-hidden="true">&darr;</span>
                  </h3>
                  <a
                    className="flex px-6 py-4 mt-5 transition duration-300 ease-in-out shadow-xl group rounded-3xl bg-white/50 text-couture-darkGold shadow-couture-darkGold/5 hover:bg-white/100"
                    href="mailto:sostrenehals@gmail.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="group">
                      <dt className="sr-only">Email</dt>
                      <dd className="flex items-center">
                        <AtSymbolIcon
                          className="flex-shrink-0 w-6 h-6 transition duration-300 ease-in-out text-nutmeg group-hover:text-lipstick-light group-hover:brightness-150"
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
        </div>
      </Container>
    </section>
  )
}
