import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/future/image'

export function LanguageButton() {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  const { t } = useTranslation();

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <span className="relative z-0 inline-flex font-semibold rounded-md shadow-none text-white/60 font-display">
      <div className="flex items-center">
      
      <button
        type="button"
        className="relative inline-flex items-center pr-2 text-sm uppercase transition duration-300 ease-in-out opacity-75 bg-t hover:opacity-1 hover:text-white/100"
      >
        <Link activeClassName={locale === 'en'} href={asPath} locale="en">
          <p>en</p>
        </Link>
      </button>

      <p>|</p>

      <button
        type="button"
        className="relative inline-flex items-center pl-2 -ml-px text-sm uppercase transition duration-300 ease-in-out opacity-75 bg-t hover:text-white/100 hover:opacity-1"
      >
        <Link activeClassName={locale === 'no'} href={asPath} locale="no">
          <p>no</p>
        </Link>
      </button>
      </div>
    </span>
  );
}
