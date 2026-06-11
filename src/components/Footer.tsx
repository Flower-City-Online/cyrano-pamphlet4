export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12 side-padding">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-[family-name:var(--font-display)] font-extrabold text-xl gradient-text tracking-tight">Cyrano Connect</span>
            <p className="text-cyrano-muted text-sm">A World Less Lonely</p>
            <p className="text-cyrano-muted text-xs">&copy; {new Date().getFullYear()} Cyrano LC. All rights reserved.</p>
          </div>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center md:justify-end gap-6 text-sm text-cyrano-gray">
              <li><a href="#the-problem" className="hover:text-white transition-colors duration-200">The Problem</a></li>
              <li><a href="#our-approach" className="hover:text-white transition-colors duration-200">Our Approach</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors duration-200">How It Works</a></li>
              <li><a href="#community" className="hover:text-white transition-colors duration-200">Community</a></li>
              <li><a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">Download</a></li>
            </ul>
          </nav>
        </div>
    </footer>
  )
}
