interface SectionLabelProps {
  text: string
  className?: string
}

export default function SectionLabel({ text, className = '' }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="w-4 h-4 rounded-full bg-[#8f1d1d] shrink-0" />
      <span className="text-[#e6e6e6] text-2xl font-bold tracking-widest uppercase">
        {text}
      </span>
    </div>
  )
}
