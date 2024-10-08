import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/future/image'

export function LanguageButton() {
  const { locale, asPath } = useRouter()
  const { t } = useTranslation()

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <span className="relative z-0 inline-flex rounded-md font-display font-semibold text-white/60 shadow-none">
      <div className="flex items-center">
        <Link href={asPath} locale="en">
          <button
            type="button"
            className={classNames(
              'bg-t relative inline-flex items-center pr-2 text-sm uppercase transition duration-300 ease-in-out',
              locale === 'en' ? 'text-white' : 'text-white/70 hover:text-white'
            )}
          >
            en
          </button>
        </Link>

        <p>|</p>

        <Link href={asPath} locale="no">
          <button
            type="button"
            className={classNames(
              'bg-t relative -ml-px inline-flex items-center pl-2 text-sm uppercase transition duration-300 ease-in-out',
              locale === 'no' ? 'text-white' : 'text-white/70 hover:text-white'
            )}
          >
            no
          </button>
        </Link>
      </div>
    </span>
  )
}
