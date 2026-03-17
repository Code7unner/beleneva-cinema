interface SectionLabelProps {
  text: string
  className?: string
}

export default function SectionLabel({ text, className = '' }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 md:gap-16 ${className}`}>
      <span className="w-2.5 h-2.5 md:w-4 md:h-4 rounded-full shrink-0" style={{ backgroundColor: '#8f1d1d' }} />
      <span className="text-[16px] md:text-[24px]" style={{ color: '#e6e6e6', fontWeight: 700, lineHeight: '36px' }}>
        {text}
      </span>
    </div>
  )
}
