import Link from 'next/link'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import { Container } from '@/components/Container'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

import VideoPlayer from './VideoPlayer'
import { HalsSistersLogo } from './Logos'
import { BakgardenkonsertLogo } from './Logos'

export function VideoComponent() {
  const { locale, locales, defaultLocale, asPath } = useRouter()

  const { t } = useTranslation()

  const posts = [
    // More posts...
    {
      id: 3,
      title: 'Julekonsert i Ris kirke',
      href: 'https://bakgardensandvika.no/arrangementer/opera-til-folket-9',
      description: `Julekonsert med Søstrene Hals, Sølvguttene, Atle Tømmervik og Ingunn Tennøe.`,
      promo:
        'https://res.cloudinary.com/dt3k2apqd/video/upload/v1700326559/S%C3%B8strene%20Hals/Julekonsert_v2_gxaveq.mp4',
      poster:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/S%C3%B8strene%20Hals/julekonsert_poster_video_gekglp.webp',
      date: `19${locale === 'en' ? '' : '.'} ${t('common:dec')}, 2023`,
      datetime: '2023-12-19',
      category: { title: 'Konsert' },
      venue: {
        name: `Julekonsert med Søstrene Hals og Sølvguttene`,
        website: 'ticketmaster.no',

        logo: <HalsSistersLogo className="w-5 fill-[#a19385]" />,
      },
    },
  ]

  const currentDate = new Date()
  const oneWeekAgo = new Date(currentDate)
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)

  const filteredPosts = posts.filter((post) => {
    const postDate = new Date(post.datetime)
    return postDate >= oneWeekAgo
  })

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      {filteredPosts.length === 0 ? (
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{
            opacity: 0,
            y: 50,
          }}
          transition={{
            delay: 0.5,
            duration: 1,
            type: 'fade',
          }}
          className="col-span-3 w-fit overflow-hidden rounded-xl bg-couture-lightGold/30 p-6 text-left font-display text-couture-darkGold"
        >
          {t('common:stayTuned')}
        </motion.div>
      ) : (
        filteredPosts.map((post, i) => (
          <motion.article
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              initialDelay: 0.3,
              duration: 0.7,
              delay: i * 0.3,
              ease: 'easeOut',
            }}
            key={i}
            className="flex flex-col items-start justify-between"
          >
            {post.promo ? (
              <div className="relative aspect-[3/5] w-full rounded-2xl object-cover">
                <div className="absolute flex h-full w-full items-center justify-center overflow-hidden rounded-2xl">
                  <VideoPlayer publicId={post.promo} poster={post.poster} />
                </div>
              </div>
            ) : (
              <div className="relative w-full">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  width={2152}
                  height={2689}
                  className="bg-gold aspect-[4/5] w-full rounded-2xl object-cover"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
            )}
          </motion.article>
        ))
      )}
    </div>
  )
}
