import Image from 'next/image'
import { Container } from '../components/Container'
import { motion } from 'framer-motion'

const image_1 = `https://res.cloudinary.com/dt3k2apqd/image/upload/v1664354992/S%C3%B8strene%20Hals/image9_zppfr3.jpg`
const image_2 = `https://res.cloudinary.com/dt3k2apqd/image/upload/v1664354991/S%C3%B8strene%20Hals/image7_krqfuv.jpg`
const image_3 = `https://res.cloudinary.com/dt3k2apqd/image/upload/v1664354991/S%C3%B8strene%20Hals/image6_c7iw3z.jpg`
const image_4 = `https://res.cloudinary.com/dt3k2apqd/image/upload/v1664354990/S%C3%B8strene%20Hals/image5_o3p0ja.jpg`
const image_5 = `https://res.cloudinary.com/dt3k2apqd/image/upload/v1664354990/S%C3%B8strene%20Hals/image8_ef9vge.jpg`
const image_6 = `https://res.cloudinary.com/dt3k2apqd/image/upload/v1665483758/S%C3%B8strene%20Hals/image4_z4kj1w_wicivp.webp`

export function PhotoCollage() {
  return (
    <section className="overflow-hidden pt-20 lg:pt-24">
      <Container>
        {/* Large screens */}
        <div className="-m-1 hidden flex-wrap md:-m-2 md:flex">
          <div className="flex w-1/2 flex-wrap">
            <motion.div
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.1,
                duration: 0.5,
                type: 'fade',
                ease: 'easeIn',
              }}
              className="w-1/2 p-2"
            >
              <div className="block h-full w-full overflow-hidden object-cover object-center md:rounded-lg md:rounded-tl-5xl">
                <Image
                  width={1500}
                  height={1000}
                  unoptimized={true}
                  layout="responsive"
                  objectFit="cover"
                  objectPosition="center"
                  alt="gallery"
                  src={image_1}
                />
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.5,
                type: 'fade',
                ease: 'easeIn',
              }}
              className="w-1/2 p-2"
            >
              <div className="block h-full w-full overflow-hidden object-cover object-center md:rounded-lg">
                <Image
                  width={1500}
                  height={1000}
                  unoptimized={true}
                  layout="responsive"
                  objectFit="cover"
                  objectPosition="center"
                  alt="gallery"
                  src={image_2}
                />
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.5,
                type: 'fade',
                ease: 'easeIn',
              }}
              className="w-full p-2"
            >
              <div className="block h-full w-full overflow-hidden object-cover object-center md:rounded-lg md:rounded-bl-5xl">
                <Image
                  width={1500}
                  height={1000}
                  unoptimized={true}
                  layout="responsive"
                  objectFit="cover"
                  objectPosition="center"
                  alt="gallery"
                  src={image_3}
                />
              </div>
            </motion.div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <motion.div
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.7,
                duration: 0.5,
                type: 'fade',
                ease: 'easeIn',
              }}
              className="w-full p-2"
            >
              <div className="block h-full w-full overflow-hidden object-cover object-center md:rounded-lg md:rounded-tr-5xl">
                <Image
                  width={1500}
                  height={1000}
                  unoptimized={true}
                  layout="responsive"
                  objectFit="cover"
                  objectPosition="center"
                  alt="gallery"
                  src={image_4}
                />
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.9,
                duration: 0.5,
                type: 'fade',
                ease: 'easeIn',
              }}
              className="w-1/2 p-2"
            >
              <div className="block h-full w-full overflow-hidden object-cover object-center md:rounded-lg">
                <Image
                  width={1500}
                  height={1000}
                  unoptimized={true}
                  layout="responsive"
                  objectFit="cover"
                  objectPosition="center"
                  alt="gallery"
                  src={image_5}
                />
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 1.1,
                duration: 0.5,
                type: 'fade',
                ease: 'easeIn',
              }}
              className="w-1/2 p-2"
            >
              <div className="block h-full w-full overflow-hidden object-cover object-center md:rounded-lg md:rounded-br-5xl">
                <Image
                  width={1500}
                  height={1000}
                  unoptimized={true}
                  layout="responsive"
                  objectFit="cover"
                  objectPosition="center"
                  alt="gallery"
                  src={image_6}
                />
              </div>
            </motion.div>
          </div>
        </div>
        {/* Small screens */}
        <div className="-m-1 flex flex-wrap md:-m-2 md:hidden">
          <div className="flex w-full flex-wrap">
            <motion.div
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.1,
                duration: 0.5,
                type: 'fade',
                ease: 'easeIn',
              }}
              className="w-1/2 p-2"
            >
              <div className="block h-full w-full overflow-hidden rounded-2xl object-cover object-center">
                <Image
                  width={1500}
                  height={1000}
                  unoptimized={true}
                  layout="responsive"
                  objectFit="cover"
                  objectPosition="center"
                  alt="gallery"
                  src={image_1}
                />
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.5,
                type: 'fade',
                ease: 'easeIn',
              }}
              className="w-1/2 p-2"
            >
              <div className="block h-full w-full overflow-hidden rounded-2xl object-cover object-center">
                <Image
                  width={1500}
                  height={1000}
                  unoptimized={true}
                  layout="responsive"
                  objectFit="cover"
                  objectPosition="center"
                  alt="gallery"
                  src={image_2}
                />
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.5,
                type: 'fade',
                ease: 'easeIn',
              }}
              className="w-full p-2"
            >
              <div className="block h-full w-full overflow-hidden rounded-2xl object-cover object-center">
                <Image
                  width={1500}
                  height={1000}
                  unoptimized={true}
                  layout="responsive"
                  objectFit="cover"
                  objectPosition="center"
                  alt="gallery"
                  src={image_3}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}
