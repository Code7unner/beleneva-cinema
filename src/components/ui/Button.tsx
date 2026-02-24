import { type ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'outline'
  onClick?: () => void
  className?: string
  as?: 'button' | 'a'
  href?: string
  target?: string
}

export default function Button({
  children,
  variant = 'primary',
  onClick,
  className = '',
  as: Tag = 'button',
  href,
  target,
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center px-6 py-3 text-sm font-bold tracking-widest uppercase transition-all duration-200 cursor-pointer'
  const styles = {
    primary: 'bg-[#e6e6e6] text-[#0e1012] hover:bg-white',
    outline: 'border border-[#e6e6e6] text-[#e6e6e6] hover:bg-[#e6e6e6] hover:text-[#0e1012]',
  }

  if (Tag === 'a') {
    return (
      <a href={href} target={target} className={`${base} ${styles[variant]} ${className}`}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </button>
  )
}
