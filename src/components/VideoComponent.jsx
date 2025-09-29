import Link from 'next/link'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import { Container } from '@/components/Container'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { HalsSistersLogo } from './Logos'
import { BakgardenkonsertLogo } from './Logos'

export function VideoComponent() {
  const { locale, locales, defaultLocale, asPath } = useRouter()

  const { t } = useTranslation()

  const posts = [
    // More posts...
    {
      id: 3,
      title: 'Julekonsert i Ullern kirke',
      href: 'https://www.ticketmaster.no/event/sostrene-hals-inviterer-jul-med-solvguttene-zlatanos-og-tommervik-billetter/2072519196',
      description: `Julekonsert med Søstrene Hals, Sølvguttene, Atle Tømmervik og Stefan Ibsen Zlatanos.`,
      promo: '#',
      poster: '/Julekonsert_2025_desktop.webp',
      date: `20${locale === 'en' ? '' : '.'} ${t('common:dec')}, 2025`,
      datetime: '2025-12-20',
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
                <Image
                  width={1500}
                  height={2121}
                  alt="gallery"
                  src="/Julekonsert_2025_mobile.webp"
                  className="h-full w-full rounded-2xl bg-tan-light/50 object-cover"
                />
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
