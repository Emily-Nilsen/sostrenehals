import { forwardRef } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  round: 'inline-flex justify-center rounded-2xl bg-t p-4 text-base font-semibold text-couture-darkGold/80 hover:bg-nutmeg focus:outline-none border border-nutmeg/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70 hover:text-white transition duration-300 ease-in-out', 
  square: 'inline-flex justify-center rounded-none bg-t py-4 px-7 text-lg uppercase tracking-wide font-medium text-white/80 hover:bg-nutmeg focus:outline-none border border-white/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70 hover:text-white transition duration-300 ease-in-out font-display',
}


export const Button = forwardRef(function Button(
  { variant = 'round', className, href, ...props },
  ref
) {
  className = clsx(
    baseStyles[variant],
    className
  )

  return href ? (
    <Link ref={ref} href={href} className={className} {...props} />
  ) : (
    <button ref={ref} className={className} {...props} />
  )
})

export const SquareButton = forwardRef(function Button(
  { variant = 'square', className, href, ...props },
  ref
) {
  className = clsx(
    baseStyles[variant],
    className
  )

  return href ? (
    <Link ref={ref} href={href} className={className} {...props} />
  ) : (
    <button ref={ref} className={className} {...props} />
  )
})