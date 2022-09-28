import Image from 'next/image'
import { Container } from '../components/Container'
import { motion } from 'framer-motion'

const image_1 = `https://res.cloudinary.com/dt3k2apqd/image/upload/v1664354992/S%C3%B8strene%20Hals/image9_zppfr3.jpg`
const image_2 = `https://res.cloudinary.com/dt3k2apqd/image/upload/v1664354991/S%C3%B8strene%20Hals/image7_krqfuv.jpg`
const image_3 = `https://res.cloudinary.com/dt3k2apqd/image/upload/v1664354991/S%C3%B8strene%20Hals/image6_c7iw3z.jpg`
const image_4 = `https://res.cloudinary.com/dt3k2apqd/image/upload/v1664354990/S%C3%B8strene%20Hals/image5_o3p0ja.jpg`
const image_5 = `https://res.cloudinary.com/dt3k2apqd/image/upload/v1664354990/S%C3%B8strene%20Hals/image8_ef9vge.jpg`
const image_6 = `https://res.cloudinary.com/dt3k2apqd/image/upload/v1662744958/S%C3%B8strene%20Hals/image1_ijhoiz.jpg`

export function PhotoCollage() {
  return (
    <section className="pt-20 overflow-hidden lg:pt-24">
      <Container>
        {/* Large screens */}
        <div className="flex-wrap hidden -m-1 md:-m-2 md:flex">
          <div className="flex flex-wrap w-1/2">
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
              <div className="block object-cover object-center w-full h-full overflow-hidden md:rounded-lg md:rounded-tl-5xl">
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
              <div className="block object-cover object-center w-full h-full overflow-hidden md:rounded-lg">
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
              <div className="block object-cover object-center w-full h-full overflow-hidden md:rounded-lg md:rounded-bl-5xl">
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
          <div className="flex flex-wrap w-1/2">
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
              <div className="block object-cover object-center w-full h-full overflow-hidden md:rounded-lg md:rounded-tr-5xl">
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
              <div className="block object-cover object-center w-full h-full overflow-hidden md:rounded-lg">
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
              <div className="block object-cover object-center w-full h-full overflow-hidden md:rounded-lg md:rounded-br-5xl">
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
        <div className="flex flex-wrap -m-1 md:-m-2 md:hidden">
          <div className="flex flex-wrap w-full">
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
              <div className="block object-cover object-center w-full h-full overflow-hidden rounded-2xl">
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
              <div className="block object-cover object-center w-full h-full overflow-hidden rounded-2xl">
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
              <div className="block object-cover object-center w-full h-full overflow-hidden rounded-2xl">
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
