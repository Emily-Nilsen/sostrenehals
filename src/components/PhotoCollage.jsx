import Image from 'next/image'
import { Container } from '../components/Container'
import { motion } from 'framer-motion'

const image_1 = `/image9.webp`
const image_2 = `/image7.jpg`
const image_3 = `/image6.webp`
const image_4 = `/image5.webp`
const image_5 = `/image8.webp`
const image_6 = `/image4.webp`
const image_7 = `/image_02_2024.webp`
const image_8 = `/image_03_2024.webp`
const image_9 = `/image4.webp`
const image_10 = `/hals_ballroom.webp`

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
                  src={image_3}
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
                  src={image_7}
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
                  src={image_8}
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
                  src={image_1}
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
                  src={image_10}
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
                  src={image_10}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}
