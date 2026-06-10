import { useMemo, Fragment } from 'react'

interface FloatingLettersProps {
  text: string
  className?: string
}

export default function FloatingLetters({ text, className = '' }: FloatingLettersProps) {
  const isGradient = className.includes('gradient-text')
  const isShimmer = className.includes('gradient-text-pink')

  const words = useMemo(() => {
    const segments = text.split(/(\s+)/)
    const totalNonSpace = text.replace(/\s/g, '').length
    let globalIdx = 0

    return segments.map((segment) => {
      if (/^\s+$/.test(segment)) return { isSpace: true as const, segment }

      const chars = segment.split('').map((char) => {
        const idx = globalIdx++
        return {
          char,
          delay: idx * 0.18 + Math.random() * 0.5,
          duration: 16 + Math.random() * 10,
          bgPos: totalNonSpace > 1 ? (idx / (totalNonSpace - 1)) * 100 : 50,
        }
      })
      return { isSpace: false as const, segment, chars }
    })
  }, [text])

  const charCount = text.replace(/\s/g, '').length

  return (
    <span className={isGradient ? undefined : className || undefined}>
      {words.map((w, wi) => {
        if (w.isSpace) return <Fragment key={wi}>{' '}</Fragment>

        return (
          <span key={wi} style={{ whiteSpace: 'nowrap', display: 'inline-block' }}>
            {w.chars!.map((c, ci) => {
              const floatAnim = `letter-float ${c.duration}s ${c.delay}s infinite ease-in-out`
              const shimmerAnim = isShimmer ? `, gradient-shift 4s ease infinite` : ''

              return (
                <span
                  key={ci}
                  className={`floating-char${isGradient ? ` ${className}` : ''}`}
                  style={{
                    animation: `${floatAnim}${shimmerAnim}`,
                    ...(isGradient ? {
                      backgroundSize: `${Math.max(charCount * 120, 300)}% 200%`,
                      backgroundPosition: `${c.bgPos}% center`,
                    } : {}),
                  }}
                >
                  {c.char}
                </span>
              )
            })}
          </span>
        )
      })}
    </span>
  )
}
