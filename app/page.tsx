"use client"

import { AuroraBackground } from '@/components/ui/aurora-background'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      {/* Hero — Aurora Background */}
      <AuroraBackground className="h-auto min-h-screen items-start justify-start pt-24 pb-0 overflow-hidden font-sans text-ink">
        <div className="w-full max-w-[1100px] mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
            className="max-w-lg pb-20 relative z-10"
          >
            <h1 className="text-5xl md:text-[3.4rem] font-extrabold leading-[1.06] text-ink mb-5">
              Your money has a story.<br />Let&apos;s read it.
            </h1>
            <p className="text-slate text-lg leading-relaxed mb-8 max-w-sm">
              Track what you spend. Change what you want to. No shame, just clarity.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="bg-sage hover:bg-sage-dark text-white text-sm font-bold px-7 py-3.5 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2 inline-flex items-center"
                style={{ boxShadow: '0 4px 12px rgba(76,175,130,0.35)', minHeight: 48 }}
              >
                Get started
              </a>
              <a
                href="#how-it-works"
                className="border-2 border-ink text-ink hover:bg-ink hover:text-white text-sm font-bold px-7 py-3.5 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2 inline-flex items-center"
                style={{ minHeight: 48 }}
              >
                See how it works
              </a>
            </div>
          </motion.div>

          {/* App illustration */}
          {/* TODO: replace placeholder with real app screenshot */}
          <div className="absolute right-0 top-0 h-full w-[48%] hidden md:block pointer-events-none overflow-hidden">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
              className="relative w-full h-full"
            >
              {/* Main phone card */}
              <div className="absolute top-8 left-10 w-52 bg-white rounded-3xl overflow-hidden border border-cloud" style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}>
                <div className="px-5 pt-5 pb-4" style={{ backgroundColor: '#E8F5EE' }}>
                  <div className="text-xs text-slate font-medium mb-1">March 2026</div>
                  <div className="text-2xl font-extrabold text-ink">$1,240.00</div>
                  <div className="text-xs text-mist mt-0.5">Total spent this month</div>
                  <div className="mt-3 bg-cloud rounded-full h-1.5">
                    <div className="rounded-full h-1.5" style={{ width: '82%', backgroundColor: '#4CAF82' }}></div>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-mist">Budget: $1,500.00</span>
                    <span className="text-xs font-semibold" style={{ color: '#4CAF82' }}>82%</span>
                  </div>
                </div>
                <div className="px-4 py-3 space-y-2.5">
                  {[
                    { emoji: '🍕', name: 'Lunch', cat: 'Food & Dining', amount: '$14.50' },
                    { emoji: '🚗', name: 'Uber', cat: 'Transport', amount: '$9.20' },
                    { emoji: '🛒', name: 'Groceries', cat: 'Groceries', amount: '$67.30' },
                    { emoji: '📱', name: 'Netflix', cat: 'Subscriptions', amount: '$15.99' },
                  ].map((item) => (
                    <div key={item.name} className="flex items-center gap-2.5">
                      <span className="text-base leading-none">{item.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-semibold text-ink">{item.name}</div>
                        <div className="text-xs text-mist">{item.cat}</div>
                      </div>
                      <span className="text-xs font-semibold flex-shrink-0" style={{ color: '#F05A5A' }}>{item.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Streak badge */}
              <div className="absolute top-6 right-14 bg-white rounded-2xl border border-cloud px-4 py-3" style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.10)' }}>
                <div className="flex items-center gap-2">
                  <span className="text-lg leading-none">🔥</span>
                  <div>
                    <div className="text-xs font-bold text-ink">14-day streak</div>
                    <div className="text-xs text-mist">Pack lunch at work</div>
                  </div>
                </div>
              </div>
              {/* Savings badge */}
              <div className="absolute bottom-24 left-2 bg-white rounded-2xl border border-cloud px-4 py-3" style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
                <div className="text-xs text-mist mb-0.5">Saved this week</div>
                <div className="text-base font-extrabold" style={{ color: '#4CAF82' }}>+$47.00</div>
              </div>
            </motion.div>
          </div>
        </div>
      </AuroraBackground>

    <div className="bg-snow text-ink font-sans">

      {/* Section 1: Expenses */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: '#4CAF82' }}>Expenses</span>
            <h2 className="text-[2.2rem] font-extrabold text-ink mt-2">Know exactly where your money goes</h2>
            <p className="text-slate text-lg mt-3 max-w-xl mx-auto">Log what you spend. See your patterns. Change what matters.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Card: Log expenses */}
            <div className="rounded-2xl p-8 min-h-[300px] flex flex-col justify-between overflow-hidden transition-all duration-200 hover:-translate-y-0.5" style={{ backgroundColor: '#E8F5EE', borderTop: '4px solid #4CAF82' }}>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] mb-3" style={{ color: '#2E7D55' }}>Log</p>
                <h3 className="text-2xl font-extrabold text-ink leading-tight">Log expenses<br />in 10 seconds</h3>
                <p className="text-slate text-sm mt-3 leading-relaxed max-w-xs">Pick the amount, pick a category, done. Your spending history builds on its own.</p>
              </div>
              <div className="mt-6 bg-white rounded-2xl p-4 border border-cloud" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <div className="text-xl font-extrabold text-ink mb-3">$24.00</div>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full border" style={{ backgroundColor: '#E8F5EE', color: '#2E7D55', borderColor: 'rgba(76,175,130,0.3)' }}>🍕 Food</span>
                  <span className="bg-snow text-slate text-xs font-medium px-3 py-1 rounded-full border border-cloud">🚗 Transport</span>
                  <span className="bg-snow text-slate text-xs font-medium px-3 py-1 rounded-full border border-cloud">🛒 Groceries</span>
                </div>
                <div className="mt-3 w-full text-center text-white text-xs font-bold py-2 rounded-xl" style={{ backgroundColor: '#4CAF82', boxShadow: '0 2px 8px rgba(76,175,130,0.3)' }}>Log it</div>
              </div>
            </div>

            {/* Card: Budget at a glance */}
            <div className="bg-white rounded-2xl p-8 min-h-[300px] flex flex-col justify-between border border-cloud transition-all duration-200 hover:-translate-y-0.5" style={{ borderTop: '4px solid #4A90D9', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] mb-3" style={{ color: '#4A90D9' }}>Budget</p>
                <h3 className="text-2xl font-extrabold text-ink leading-tight">See your budget<br />at a glance</h3>
              </div>
              <div className="mt-4 space-y-3">
                {[
                  { emoji: '🍕', label: 'Food & Dining', spent: 320, budget: 400, pct: '80%', color: '#4CAF82' },
                  { emoji: '🛒', label: 'Groceries', spent: 180, budget: 200, pct: '90%', color: '#F5A623' },
                  { emoji: '🚗', label: 'Transport', spent: 89, budget: 150, pct: '59%', color: '#4CAF82' },
                  { emoji: '📱', label: 'Subscriptions', spent: 127, budget: 100, pct: '100%', color: '#F05A5A', over: true },
                ].map((row) => (
                  <div key={row.label}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="font-medium text-ink">{row.emoji} {row.label}</span>
                      <span className="font-semibold" style={{ color: row.over ? '#F05A5A' : undefined }}>${row.spent}.00 / ${row.budget}.00</span>
                    </div>
                    <div className="bg-cloud rounded-full h-2">
                      <div className="rounded-full h-2" style={{ width: row.pct, backgroundColor: row.color }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Card: Categories */}
            <div className="bg-white rounded-2xl p-8 min-h-[220px] flex flex-col justify-between border border-cloud transition-all duration-200 hover:-translate-y-0.5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-mist mb-3">Categories</p>
                <h3 className="text-2xl font-extrabold text-ink leading-tight">Pick a category.<br />See where it&apos;s going.</h3>
              </div>
              <div className="mt-5 grid grid-cols-4 gap-3">
                {[['🍕','Food'],['🛒','Groceries'],['🚗','Transport'],['🏠','Housing'],['🎬','Fun'],['🛍','Shopping'],['💊','Health'],['📱','Subs']].map(([emoji, label]) => (
                  <div key={label} className="text-center">
                    <div className="text-2xl mb-1">{emoji}</div>
                    <div className="text-xs text-mist">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Card: Habits */}
            <div className="rounded-2xl p-8 min-h-[220px] flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5" style={{ backgroundColor: '#8E7CF3' }}>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] mb-3" style={{ color: 'rgba(255,255,255,0.55)' }}>Habits</p>
                <h3 className="text-2xl font-extrabold text-white leading-tight">Build habits<br />that save you money</h3>
                <p className="text-sm mt-3 leading-relaxed max-w-xs" style={{ color: 'rgba(255,255,255,0.65)' }}>Pick one habit to start. Track it daily. See the savings add up.</p>
              </div>
              <div className="mt-5 flex items-center gap-3 rounded-xl px-4 py-3" style={{ background: 'rgba(255,255,255,0.12)' }}>
                <span className="text-lg leading-none">🔥</span>
                <div>
                  <div className="text-sm font-bold text-white">14-day streak</div>
                  <div className="text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>Pack lunch at work</div>
                </div>
                <div className="ml-auto text-sm font-extrabold text-white">+$126.00</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Budget */}
      <section className="py-20 bg-snow">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: '#4CAF82' }}>Budget</span>
            <h2 className="text-[2.2rem] font-extrabold text-ink mt-2">Set a budget. Pick a category. See what changes.</h2>
            <p className="text-slate text-lg mt-3 max-w-xl mx-auto">You pick the number. We show you where you stand, every day.</p>
          </div>

          {/* Large sky blue card */}
          <div className="rounded-2xl p-8 text-white mb-3 min-h-[280px] overflow-hidden relative transition-all duration-200 hover:-translate-y-0.5" style={{ backgroundColor: '#4A90D9' }}>
            <div className="max-w-sm relative z-10">
              <p className="text-xs font-bold uppercase tracking-[0.12em] mb-3" style={{ color: 'rgba(255,255,255,0.6)' }}>Overview</p>
              <h3 className="text-3xl font-extrabold leading-tight">Set a budget for<br />your biggest spend</h3>
              <p className="text-sm mt-3 leading-relaxed max-w-xs" style={{ color: 'rgba(255,255,255,0.75)' }}>Not sure where to start? Most people start with Food and Dining. You can always change it.</p>
              <a href="#" className="inline-block mt-5 text-sm font-bold transition-opacity hover:opacity-100" style={{ color: 'rgba(255,255,255,0.75)' }}>Set a budget →</a>
            </div>
            <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden md:block">
              <div className="rounded-2xl p-5 min-w-[200px]" style={{ background: 'rgba(255,255,255,0.15)' }}>
                <div className="text-xs font-bold mb-3" style={{ color: 'rgba(255,255,255,0.65)' }}>This month</div>
                <div className="space-y-2.5">
                  {[
                    { emoji: '🍕', pct: '80%', amount: '$320.00', color: 'rgba(255,255,255,0.8)' },
                    { emoji: '🛒', pct: '90%', amount: '$180.00', color: '#F5A623' },
                    { emoji: '📱', pct: '100%', amount: '$127.00', color: '#F05A5A' },
                  ].map((row) => (
                    <div key={row.emoji} className="flex items-center gap-3">
                      <span className="text-sm leading-none">{row.emoji}</span>
                      <div className="flex-1">
                        <div className="rounded-full h-1.5" style={{ background: 'rgba(255,255,255,0.2)' }}>
                          <div className="rounded-full h-1.5" style={{ width: row.pct, backgroundColor: row.color }}></div>
                        </div>
                      </div>
                      <span className="text-xs" style={{ color: 'rgba(255,255,255,0.65)' }}>{row.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
            {/* Bills reminder */}
            <div className="bg-white rounded-2xl p-8 min-h-[200px] flex flex-col justify-between border border-cloud transition-all duration-200 hover:-translate-y-0.5" style={{ borderTop: '4px solid #F5A623' }}>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] mb-3" style={{ color: '#F5A623' }}>Bills</p>
                <h3 className="text-xl font-extrabold text-ink leading-tight">Get reminded before bills hit</h3>
                <p className="text-slate text-sm mt-2 leading-relaxed">You&apos;ll see recurring expenses a day before they land. No surprises.</p>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between bg-snow rounded-xl px-3 py-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm leading-none">📱</span>
                    <span className="text-xs font-medium text-ink">Netflix</span>
                  </div>
                  <span className="text-xs font-semibold" style={{ color: '#F5A623' }}>Due tomorrow</span>
                </div>
                <div className="flex items-center justify-between bg-snow rounded-xl px-3 py-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm leading-none">🏠</span>
                    <span className="text-xs font-medium text-ink">Rent</span>
                  </div>
                  <span className="text-xs font-semibold text-mist">Due in 5 days</span>
                </div>
              </div>
            </div>

            {/* Reports */}
            <div className="bg-white rounded-2xl p-8 min-h-[200px] flex flex-col justify-between border border-cloud transition-all duration-200 hover:-translate-y-0.5" style={{ borderTop: '4px solid #4A90D9' }}>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] mb-3" style={{ color: '#4A90D9' }}>Reports</p>
                <h3 className="text-xl font-extrabold text-ink leading-tight">See what changed month to month</h3>
                <p className="text-slate text-sm mt-2 leading-relaxed">You spent $480.00 on food. That&apos;s $80.00 over budget. Here&apos;s where it went.</p>
              </div>
              <a href="#" className="text-sm font-bold mt-4 inline-block transition-colors hover:opacity-80" style={{ color: '#4A90D9' }}>See your reports →</a>
            </div>
          </div>

          {/* Clarity card */}
          <div className="bg-white rounded-2xl p-8 border border-cloud flex flex-col md:flex-row items-center gap-8 transition-all duration-200 hover:-translate-y-0.5">
            {/* TODO: replace placeholder */}
            <div className="w-40 min-h-[200px] bg-snow rounded-3xl border border-cloud flex-shrink-0 flex flex-col items-center justify-center text-center px-4" style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.06)' }}>
              <div className="text-xs text-mist mb-2">Subscriptions</div>
              <div className="text-xl font-extrabold text-ink">$127.00</div>
              <div className="text-xs font-semibold mt-1" style={{ color: '#F05A5A' }}>$27.00 over budget</div>
              <div className="mt-3 bg-cloud rounded-full h-1.5 w-full">
                <div className="rounded-full h-1.5 w-full" style={{ backgroundColor: '#F05A5A' }}></div>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-mist mb-3">Clarity</p>
              <h3 className="text-2xl font-extrabold text-ink leading-tight">You spent $127.00 on subscriptions.<br />That&apos;s $12.00 up from last month.</h3>
              <p className="text-slate text-sm mt-3 leading-relaxed max-w-md">HabitCents shows you what changed, in plain language. No dashboards to decode.</p>
              <a href="#" className="text-sm font-bold text-slate hover:text-ink mt-4 inline-block transition-colors">See your full report →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Habits */}
      <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: '#4CAF82' }}>Habits</span>
            <h2 className="text-[2.2rem] font-extrabold text-ink mt-2">One habit, tracked every day.</h2>
            <p className="text-slate text-lg mt-3 max-w-xl mx-auto">Small changes, tracked consistently, beat ambitious plans abandoned after a week.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Large lavender card */}
            <div className="rounded-2xl p-8 min-h-[340px] flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5" style={{ backgroundColor: '#8E7CF3' }}>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] mb-3" style={{ color: 'rgba(255,255,255,0.55)' }}>Streaks</p>
                <h3 className="text-2xl font-extrabold text-white leading-tight">Pick one habit to start with</h3>
                <p className="text-sm mt-2 leading-relaxed max-w-xs" style={{ color: 'rgba(255,255,255,0.65)' }}>&ldquo;One&rdquo; reduces overwhelm. You can always add more later.</p>
              </div>
              <div className="mt-6">
                <div className="grid grid-cols-7 gap-1.5 mb-3">
                  {Array.from({ length: 13 }).map((_, i) => (
                    <div key={i} className="h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white" style={{ background: 'rgba(255,255,255,0.75)' }}>✓</div>
                  ))}
                  <div className="h-7 rounded-lg flex items-center justify-center text-xs" style={{ background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.35)' }}>·</div>
                </div>
                <div className="flex items-center gap-3 rounded-xl px-4 py-2.5" style={{ background: 'rgba(255,255,255,0.12)' }}>
                  <span className="text-lg leading-none">🔥</span>
                  <span className="text-sm font-bold text-white">13-day streak</span>
                  <span className="text-sm font-extrabold text-white ml-auto">= $126.00 saved</span>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-3">
              {/* Savings impact */}
              <div className="bg-white rounded-2xl p-8 flex flex-col justify-between border border-cloud transition-all duration-200 hover:-translate-y-0.5 flex-1" style={{ borderTop: '4px solid #4CAF82' }}>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] mb-3" style={{ color: '#4CAF82' }}>Savings</p>
                  <h3 className="text-xl font-extrabold text-ink leading-tight">Saved $126.00 by packing lunch 18 times</h3>
                  <p className="text-slate text-sm mt-2 leading-relaxed">Every habit you keep shows you what it&apos;s worth, in dollars.</p>
                </div>
                <div className="mt-4 flex items-center justify-between rounded-xl px-4 py-3" style={{ backgroundColor: '#E8F5EE' }}>
                  <span className="text-sm font-medium" style={{ color: '#2E7D55' }}>Pack lunch at work</span>
                  <span className="text-sm font-extrabold" style={{ color: '#4CAF82' }}>+$7.00/day</span>
                </div>
              </div>

              {/* Popular habits */}
              <div className="bg-snow rounded-2xl p-8 border border-cloud transition-all duration-200 hover:-translate-y-0.5 flex-1">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-mist mb-4">Popular habits</p>
                <div className="space-y-2">
                  {[
                    { emoji: '☕', label: 'Skip the coffee shop', saving: '~$5.00/day' },
                    { emoji: '🍱', label: 'Pack lunch at work', saving: '~$7.00/day' },
                    { emoji: '📺', label: 'Review subscriptions', saving: '~$30.00/mo' },
                  ].map((h) => (
                    <div key={h.label} className="flex items-center gap-3 bg-white rounded-xl px-3 py-2.5 border border-cloud">
                      <span className="text-base leading-none">{h.emoji}</span>
                      <span className="text-sm font-medium text-ink flex-1">{h.label}</span>
                      <span className="text-xs font-semibold" style={{ color: '#4CAF82' }}>{h.saving}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof stats */}
      <section className="py-20 bg-snow border-y border-cloud">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-extrabold text-ink mb-2">12,000+</div>
              <div className="text-slate">people tracking their spending daily</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold text-ink mb-2">$126</div>
              <div className="text-slate">average monthly savings by tracking one habit</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold text-ink mb-2">30 sec</div>
              <div className="text-slate">to log your first expense</div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: '#4CAF82' }}>How it works</span>
            <h2 className="text-[2.2rem] font-extrabold text-ink mt-2">Four steps to clarity</h2>
            <p className="text-slate text-lg mt-3 max-w-xl mx-auto">No setup wizards. No jargon. Just what you need to start.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { num: '01', title: 'Log what you spend', desc: 'It takes about 10 seconds. Pick an amount and a category. Done.' },
              { num: '02', title: 'Set a budget for your biggest category', desc: 'You can always change it. Most people start with Food and Dining.' },
              { num: '03', title: 'Pick one habit to track', desc: 'Small changes, tracked consistently, beat ambitious plans abandoned after a week.', accent: '#8E7CF3' },
              { num: '04', title: 'Watch the savings add up', desc: "Every habit you keep shows you what it's worth, in dollars." },
            ].map((step) => (
              <div key={step.num} className="bg-snow rounded-2xl p-7 border border-cloud" style={step.accent ? { borderTop: `4px solid ${step.accent}` } : undefined}>
                <div className="text-3xl font-extrabold mb-4" style={{ color: '#4CAF82' }}>{step.num}</div>
                <h3 className="text-lg font-extrabold text-ink mb-2">{step.title}</h3>
                <p className="text-slate text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-snow">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: '#4CAF82' }}>Pricing</span>
            <h2 className="text-[2.2rem] font-extrabold text-ink mt-2">Choose your plan</h2>
            <p className="text-slate text-lg mt-3">Two options. No tricks.</p>
          </div>
          <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Free */}
            <div className="bg-white rounded-2xl p-8 border border-cloud flex flex-col" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}>
              <div className="text-sm font-bold text-slate mb-1">Free</div>
              <div className="text-3xl font-extrabold text-ink mb-1">$0</div>
              <div className="text-xs text-mist mb-8">No credit card needed</div>
              <ul className="space-y-3 text-sm text-slate flex-1">
                {['Track up to 1 habit','Log daily expenses','Set 3 spending categories','30-day expense history'].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="font-bold mt-0.5" style={{ color: '#4CAF82' }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="mt-8 flex items-center justify-center text-sm font-bold px-6 py-3.5 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border-2 border-sage text-sage hover:bg-sage hover:text-white"
                style={{ minHeight: 48 }}
              >
                Start free
              </a>
            </div>

            {/* Premium */}
            <div className="rounded-2xl p-8 flex flex-col relative" style={{ backgroundColor: '#1A1D23', transform: 'scale(1.04)', boxShadow: '0 20px 40px rgba(0,0,0,0.18)', borderRadius: 20 }}>
              <div className="absolute top-5 right-5 text-[10px] font-extrabold uppercase tracking-wide px-2.5 py-1 rounded-full" style={{ backgroundColor: '#8E7CF3', color: '#fff' }}>Most popular</div>
              <div className="text-sm font-bold mb-1" style={{ color: 'rgba(255,255,255,0.5)' }}>Premium</div>
              <div className="text-3xl font-extrabold text-white mb-1">$7.99<span className="text-base font-normal" style={{ color: 'rgba(255,255,255,0.4)' }}> per month</span></div>
              <div className="text-xs mb-8" style={{ color: 'rgba(255,255,255,0.35)' }}>$59.99 per year. Save 37%.</div>
              <ul className="space-y-3 text-sm flex-1" style={{ color: 'rgba(255,255,255,0.65)' }}>
                {['Track up to 5 habits','Unlimited spending categories','Full expense history','Monthly reports, side by side','Bill reminders'].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="font-bold mt-0.5" style={{ color: '#4CAF82' }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="mt-8 block text-center text-white text-sm font-bold px-6 py-3.5 rounded-xl transition-all duration-200 focus:outline-none flex items-center justify-center"
                style={{ backgroundColor: '#4CAF82', boxShadow: '0 4px 12px rgba(76,175,130,0.4)', minHeight: 48 }}
              >
                Try free for 7 days
              </a>
              <p className="text-xs text-center mt-3" style={{ color: 'rgba(255,255,255,0.28)' }}>Cancel anytime. No charge until day 8.</p>
            </div>
          </div>
          <p className="text-center text-sm text-mist mt-10">
            Not ready to upgrade?{' '}
            <a href="#" className="font-semibold hover:opacity-80 transition-opacity" style={{ color: '#4CAF82' }}>Stay on free plan</a>
          </p>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-24 text-white text-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #8E7CF3 0%, #4CAF82 100%)' }}>
        <div className="relative max-w-2xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-[0.15em] mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>Ready when you are</p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.1] mb-3">
            Know where your money goes.<br />Change where it goes next.
          </h2>
          <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.7)' }}>Log your first expense in under 30 seconds.</p>
          <a
            href="#"
            className="inline-block bg-white text-sm font-bold px-8 py-4 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 inline-flex items-center"
            style={{ color: '#8E7CF3', boxShadow: '0 4px 20px rgba(0,0,0,0.15)', minHeight: 48 }}
          >
            Get started
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-16 pb-8 text-white" style={{ backgroundColor: '#1A1D23' }}>
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
            <div className="flex-shrink-0">
              <div className="font-extrabold text-lg mb-2">HabitCents</div>
              <p className="text-sm max-w-[180px] mb-5 leading-relaxed" style={{ color: 'rgba(255,255,255,0.35)' }}>Track what you spend. Build better habits.</p>
              <div className="flex gap-2">
                {[['X','Twitter / X'],['in','LinkedIn'],['IG','Instagram'],['TT','TikTok']].map(([label, aria]) => (
                  <a key={label} href="#" aria-label={aria} className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold" style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.45)' }}>{label}</a>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
              {[
                { heading: 'Product', links: ['Features','Pricing',"What's new",'Roadmap'] },
                { heading: 'Company', links: ['About','Blog','Careers','Press'] },
                { heading: 'Support', links: ['Help center','Community','Security','Status'] },
                { heading: 'Legal', links: ['Privacy','Terms','Cookies'] },
              ].map((col) => (
                <div key={col.heading}>
                  <h4 className="font-bold text-white text-sm mb-4">{col.heading}</h4>
                  <ul className="space-y-3">
                    {col.links.map((link) => (
                      <li key={link}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="border-t pt-6 text-xs text-center" style={{ borderColor: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.2)' }}>
            © 2026 HabitCents Ltd. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
    </>
  )
}
