export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 border border-[#58a6ff]/30 text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Pharmacists &amp; Healthcare Providers
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Check dangerous medication<br />interactions instantly
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Input multiple medications and get immediate warnings about dangerous combinations — powered by a comprehensive drug interaction database with severity levels.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $15/mo
        </a>
        <div className="mt-8 grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {[
            ['10,000+', 'Drug interactions'],
            ['Severity', 'Color-coded alerts'],
            ['Instant', 'Real-time results'],
          ].map(([stat, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-[#58a6ff] font-bold text-lg">{stat}</div>
              <div className="text-[#8b949e] text-xs mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple, transparent pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 max-w-sm mx-auto text-center shadow-lg shadow-[#58a6ff]/5">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Professional</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] text-sm mb-6">/month · cancel anytime</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited interaction checks',
              '10,000+ drug interaction database',
              'Severity levels: mild, moderate, severe',
              'Printable patient reports',
              'Priority email support',
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                {feature}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get started now
          </a>
          <p className="text-[#8b949e] text-xs mt-4">Secure payment via Lemon Squeezy</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
        <div className="space-y-4">
          {[
            [
              'How accurate is the drug interaction database?',
              'Our database is sourced from peer-reviewed clinical references and updated regularly. It covers over 10,000 known drug-drug interactions with evidence-based severity classifications.',
            ],
            [
              'Can I use this as a clinical decision tool?',
              'RxCheck is designed as a decision-support aid for licensed pharmacists and healthcare providers. It should complement — not replace — professional clinical judgment.',
            ],
            [
              'How do I cancel my subscription?',
              'You can cancel anytime from your Lemon Squeezy customer portal. No questions asked, no cancellation fees.',
            ],
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2 text-sm">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} RxCheck. For licensed healthcare professionals only.
      </footer>
    </main>
  )
}
