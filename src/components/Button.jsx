import { forwardRef } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  toTop: '', 
  contact: 'text-lg sm:text-xl md:text-2xl tracking-tight text-violin font-semibold font-display brightness-150 hover:brightness-200 focus:text-white/100 focus-visible:brightness-200 active:text-white/100 hover:text-white transition duration-300 ease-in-out',
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

export const ContactButton = forwardRef(function Button(
  { variant = 'contact', className, href, ...props },
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

export const ToTopButton = forwardRef(function Button(
  { variant = 'toTop', className, href, ...props },
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