import { Container } from '@/components/Container'
import Image from 'next/future/image'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

export function PhotoGallery() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mb-20 mt-4 w-screen scroll-my-0 overflow-y-visible sm:mb-24 sm:mt-6">
      <div className="-my-4 flex scroll-my-0 justify-center gap-5 overflow-x-scroll py-4 sm:gap-8">
        {[
          '/image1.webp',
          '/image2.webp',
          '/sisters_fountain.webp',
          '/image3.webp',
          '/image5.webp',
        ].map((image, imageIndex) => (
          <div
            key={imageIndex}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden overflow-x-hidden overflow-y-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt="Søstrene Hals"
              width={2048}
              height={1536}
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full overflow-hidden overflow-x-hidden overflow-y-hidden object-cover"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  )
}
