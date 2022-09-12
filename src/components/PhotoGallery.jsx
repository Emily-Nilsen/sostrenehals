import { Container } from '@/components/Container'
import Image from 'next/future/image'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

export function PhotoGallery() {
  // const [width, setWidth] = useState(0)
  // const carousel = useRef()

  // useEffect(() => {
  //   setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  // }, [])
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <motion.div
    // ref={carousel}
    // whileTap={{ cursor: 'grabbing' }}
    // className="w-full h-full overflow-hidden cursor-grab"
    >
      <motion.div
        // drag="x"
        // dragConstraints={{ right: 0, left: -width }}
        className="w-screen mt-4 mb-20 overflow-scroll sm:mt-6 sm:mb-24"
      >
        <div className="flex justify-center gap-5 py-4 -my-4 overflow-scroll sm:gap-8">
          {[
            'https://res.cloudinary.com/dt3k2apqd/image/upload/v1662744958/S%C3%B8strene%20Hals/image1_ijhoiz.jpg',
            'https://res.cloudinary.com/dt3k2apqd/image/upload/v1662744958/S%C3%B8strene%20Hals/image2_bp8unj.jpg',
            'https://res.cloudinary.com/dt3k2apqd/image/upload/v1662744958/S%C3%B8strene%20Hals/image3_mjp8nv.jpg',
            'https://res.cloudinary.com/dt3k2apqd/image/upload/v1662744958/S%C3%B8strene%20Hals/image4_z4kj1w.jpg',
            'https://res.cloudinary.com/dt3k2apqd/image/upload/v1662744958/S%C3%B8strene%20Hals/image2_bp8unj.jpg',
          ].map((image, imageIndex) => (
            <div
              key={image.src}
              className={clsx(
                'relative aspect-[9/10] w-44 flex-none overflow-scroll rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
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
      </motion.div>
    </motion.div>
  )
}

// ;<motion.div
//   ref={carousel}
//   whileTap={{ cursor: 'grabbing' }}
//   className="w-full h-full overflow-hidden cursor-grab"
// >
//   <motion.div
//     drag="x"
//     dragConstraints={{ right: 0, left: -width }}
//     className="flex w-[333.33vw] gap-0 overflow-hidden pb-16 sm:pb-24 lg:gap-0"
//   >
//     {testimonials.map((testimonial, i) => {
//       return (
//         <div
//           className="relative flex mx-auto ml-5 overflow-hidden pointer-events-none"
//           key={i}
//         >
//           <motion.div className="relative flex w-full h-full grow rounded-3xl">
//             {testimonial.component}
//           </motion.div>
//         </div>
//       )
//     })}
//   </motion.div>
// </motion.div>
