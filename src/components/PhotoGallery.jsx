import { Container } from '@/components/Container'
import Image from 'next/future/image'
import clsx from 'clsx'

export function PhotoGallery() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']
  return (
    <div className="mt-4 mb-20 sm:mt-6 sm:mb-24">
      <div className="flex justify-center gap-5 py-4 -my-4 overflow-hidden sm:gap-8">
        {[
          'https://res.cloudinary.com/dt3k2apqd/image/upload/v1662744958/S%C3%B8strene%20Hals/image1_ijhoiz.jpg',
          'https://res.cloudinary.com/dt3k2apqd/image/upload/v1662744958/S%C3%B8strene%20Hals/image2_bp8unj.jpg',
          'https://res.cloudinary.com/dt3k2apqd/image/upload/v1662744958/S%C3%B8strene%20Hals/image3_mjp8nv.jpg',
          'https://res.cloudinary.com/dt3k2apqd/image/upload/v1662744958/S%C3%B8strene%20Hals/image4_z4kj1w.jpg',
          'https://res.cloudinary.com/dt3k2apqd/image/upload/v1662744958/S%C3%B8strene%20Hals/image1_ijhoiz.jpg',
        ].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt="Søstrene Hals"
              width={2048}
              height={1536}
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
