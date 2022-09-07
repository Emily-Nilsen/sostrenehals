import Link from 'next/link'
import clsx from 'clsx'

export function Button({ href, className, ...props }) {
  className = clsx(
    'inline-flex justify-center rounded-2xl bg-t p-4 text-base font-semibold text-couture-darkGold/80 hover:bg-nutmeg focus:outline-none border border-nutmeg/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70 hover:text-white transition duration-300 ease-in-out',
    className
  )

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}
