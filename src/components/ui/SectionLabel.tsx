interface SectionLabelProps {
  text: string
  className?: string
}

export default function SectionLabel({ text, className = '' }: SectionLabelProps) {
  return (
    <div className={`flex items-center ${className}`} style={{ gap: '64px' }}>
      <span className="w-4 h-4 rounded-full shrink-0" style={{ backgroundColor: '#8f1d1d' }} />
      <span style={{ color: '#e6e6e6', fontSize: '24px', fontWeight: 700, lineHeight: '36px' }}>
        {text}
      </span>
    </div>
  )
}
