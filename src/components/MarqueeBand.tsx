const words = [
  'Real Connection', 'Less Lonely', 'Human Support',
  'Find Community', 'Be Seen', 'Social Wellness',
  'Belong', 'Intentional Matching', 'Show Up',
]
export default function MarqueeBand() {
  const doubled = [...words, ...words]
  return (
    <div className="relative overflow-hidden py-5 border-y border-white/5"
      style={{ background: 'linear-gradient(90deg, rgba(254,60,114,0.08) 0%, rgba(41,37,45,0.6) 50%, rgba(254,60,114,0.08) 100%)' }}
      aria-hidden="true">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((word, i) => (
          <span key={i} className="mx-8 text-sm font-medium text-cyrano-gray tracking-widest uppercase flex items-center gap-8">
            {word}
            <span className="text-cyrano-pink">&#10022;</span>
          </span>
        ))}
      </div>
    </div>
  )
}
