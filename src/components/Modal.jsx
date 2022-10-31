import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'

export function Modal() {
  const [open, setOpen] = useState(true)
  const { t } = useTranslation()

  return (
    <div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-20" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 transition-opacity bg-opacity-75 bg-nutmeg/60" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative px-4 pt-5 pb-4 m-3 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:p-6">
                  <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                    <button
                      type="button"
                      className="transition duration-300 ease-in-out bg-white rounded-md text-nutmeg hover:text-couture-darkGold focus:outline-none focus:ring-2 focus:ring-nutmeg/50 focus:ring-offset-2"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="w-full h-full md:max-w-sm">
                    <div className="flex items-center justify-center w-full h-full mx-auto mb-4 overflow-hidden rounded-lg bg-nutmeg md:mt-10">
                      <Image
                        src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1665826997/S%C3%B8strene%20Hals/Promos/Screenshot_voozj9.webp"
                        alt="Julekonsert i Ris kirke, 2022"
                        width={900}
                        height={1600}
                        className="overflow-hidden rounded-lg"
                        unoptimized
                      />
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://www.ticketmaster.no/event/julekonsert-med-sostrene-hals-i-ris-kirke-med-gjester-tickets/702367?language=en-us"
                    >
                      <button
                        type="button"
                        className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white transition duration-300 ease-in-out border border-transparent rounded-md shadow-sm bg-lipstick-dark shadow-lipstick-dark/10 hover:contrast-125 focus:outline-none focus:ring-2 focus:ring-lipstick-light focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => setOpen(false)}
                      >
                        {t('common:buy')}
                      </button>
                    </a>
                    <button
                      type="button"
                      className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium transition duration-300 ease-in-out bg-white border rounded-md shadow-sm border-nutmeg/30 text-couture-darkGold/80 shadow-nutmeg/5 hover:border-nutmeg/50 hover:text-couture-darkGold focus:outline-none focus:ring-2 focus:ring-nutmeg/50 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
                      onClick={() => setOpen(false)}
                    >
                      {t('common:close')}
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  )
}
