import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'

export function Modal() {
  const [open, setOpen] = useState(false) // Start with the modal closed
  const { t } = useTranslation()

  // Use useEffect to open the modal after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true) // Open the modal after 10 seconds
    }, 10000) // 10000 milliseconds = 10 seconds

    // Clear the timer if the component unmounts or if the modal is closed before 10 seconds
    return () => clearTimeout(timer)
  }, []) // Empty dependency array to run this effect only once

  return (
    <div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-20"
          onClose={() => setOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-nutmeg/60 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative m-3 transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-white text-nutmeg transition duration-300 ease-in-out hover:text-couture-darkGold focus:outline-none focus:ring-2 focus:ring-nutmeg/50 focus:ring-offset-2"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="h-full w-full md:max-w-sm">
                    <div className="mx-auto mb-4 flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-nutmeg md:mt-10">
                      <Image
                        src="/Julekonsert_2025_mobile.webp"
                        alt="Julekonsert i Ullern kirke, 2025"
                        width={3508}
                        height={4961}
                        className="overflow-hidden rounded-lg"
                        unoptimized
                      />
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://www.ticketmaster.no/event/sostrene-hals-inviterer-jul-med-solvguttene-zlatanos-og-tommervik-billetter/2072519196"
                    >
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-lipstick-dark px-4 py-2 text-base font-medium text-white shadow-sm shadow-lipstick-dark/10 transition duration-300 ease-in-out hover:contrast-125 focus:outline-none focus:ring-2 focus:ring-lipstick-light focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => setOpen(false)}
                      >
                        {t('common:buy')}
                      </button>
                    </a>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md border border-nutmeg/30 bg-white px-4 py-2 text-base font-medium text-couture-darkGold/80 shadow-sm shadow-nutmeg/5 transition duration-300 ease-in-out hover:border-nutmeg/50 hover:text-couture-darkGold focus:outline-none focus:ring-2 focus:ring-nutmeg/50 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
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
