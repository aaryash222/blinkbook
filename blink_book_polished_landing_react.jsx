import React from 'react'
import { motion } from 'framer-motion'

// BlinkBookLanding - single-file React component using TailwindCSS + Framer Motion.
// Install: npm i react framer-motion
// Tailwind setup required in host project. This file is a drop-in page component.

export default function BlinkBookLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF8F6] to-[#F6FBFF] text-gray-800 antialiased">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-300 to-yellow-200 flex items-center justify-center shadow-lg">
            <span className="font-bold text-lg tracking-tight">BB</span>
          </div>
          <div>
            <h1 className="text-xl font-semibold">BlinkBook</h1>
            <p className="text-xs text-gray-500">Tiny photo blinks. Big soft memories.</p>
          </div>
        </div>
        <nav className="flex gap-4 items-center">
          <a className="text-sm hover:underline">Features</a>
          <a className="text-sm hover:underline">How it works</a>
          <a className="text-sm hover:underline">Pricing</a>
          <button className="ml-2 px-4 py-2 bg-white/80 backdrop-blur rounded-xl shadow hover:scale-[1.02] transition">Sign up</button>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        <section className="grid md:grid-cols-2 gap-12 items-center py-12">
          <div>
            <motion.h2 className="text-4xl md:text-5xl font-extrabold leading-tight" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
              Capture a moment. See it for a blink. Keep it forever.
            </motion.h2>
            <motion.p className="mt-4 text-gray-600 max-w-lg" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
              BlinkBook turns photos into tiny, two-second flashes that flip into soft memory cards you and your partner curate together. Simple, private, and oddly addictive.
            </motion.p>

            <div className="mt-6 flex gap-4">
              <button className="px-5 py-3 bg-gradient-to-r from-pink-400 to-yellow-300 rounded-2xl font-semibold shadow-lg hover:scale-[1.02] transition">Create your deck</button>
              <button className="px-5 py-3 border rounded-2xl bg-white/60">View demo</button>
            </div>

            <ul className="mt-8 grid grid-cols-2 gap-3 text-sm text-gray-600 max-w-sm">
              <li>✨ Blink preview animation</li>
              <li>💬 Voice notes on cards</li>
              <li>🌱 Growable decks</li>
              <li>🔒 Private by default</li>
            </ul>
          </div>

          <div className="flex justify-center items-center">
            <BlinkDemo />
          </div>
        </section>

        <section className="py-8">
          <div className="bg-white/50 rounded-2xl p-6 shadow-inner backdrop-blur-sm">
            <h3 className="text-2xl font-semibold">How it works</h3>
            <div className="mt-4 grid md:grid-cols-3 gap-6">
              <Step title="1. Upload a Blink" desc="Add a photo — set deck and optional mood. It will show as a 2s blink." />
              <Step title="2. See the Blink" desc="When someone opens it, the photo flashes for two seconds with a soft animation." />
              <Step title="3. Memory Card" desc="After the blink, the card flips revealing caption, doodle, and voice note." />
            </div>
          </div>
        </section>

        <section className="py-8">
          <h3 className="text-2xl font-semibold">Deck preview</h3>
          <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <DeckCard title="Us" subtitle="Rom-com" count={42} colorFrom="#FFD1DC" colorTo="#FFFAE6" />
            <DeckCard title="2am Hilarities" subtitle="Memes" count={12} colorFrom="#DDEBFF" colorTo="#F6FBFF" />
            <DeckCard title="Tiny Wins" subtitle="Daily" count={99} colorFrom="#E9F9F1" colorTo="#F0FFF7" />
          </div>
        </section>

        <section className="py-12">
          <h3 className="text-2xl font-semibold">Design details</h3>
          <p className="mt-3 text-gray-600">Soft pastel palette, rounded cards, and micro-interactions make BlinkBook feel cozy and premium. Animations use subtle easing and short durations for a satisfying, non-obtrusive experience.</p>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <Card title="Palette" body={<Palette />} />
            <Card title="Typography" body={<Typography />} />
            <Card title="Motion" body={<MotionNotes />} />
          </div>
        </section>

        <section className="py-12">
          <h3 className="text-2xl font-semibold">MVP roadmap</h3>
          <ol className="list-decimal mt-4 ml-6 text-gray-600 space-y-2">
            <li>Authentication + user decks</li>
            <li>Blink upload + 2s preview + memory card</li>
            <li>Shared deck collaboration</li> 
            <li>Mobile-friendly UI and basic analytics</li>
            <li>Premium themes + stickers</li>
          </ol>
        </section>
      </main>

      <footer className="mt-12 py-8 border-t">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} BlinkBook — tiny flashes, big memories</p>
          <div className="flex gap-3 text-sm text-gray-500">
            <a>Privacy</a>
            <a>Terms</a>
            <a>Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function BlinkDemo() {
  return (
    <div className="w-[340px] h-[560px] bg-white rounded-3xl shadow-2xl p-6 flex flex-col items-center">
      <div className="w-full h-64 rounded-lg bg-gradient-to-br from-gray-100 to-white flex items-center justify-center overflow-hidden relative">
        <motion.img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt="blink" className="absolute w-full h-full object-cover" initial={{ scale: 1.08, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} />
        <motion.div className="absolute inset-0 bg-black/0 pointer-events-none" initial={{ opacity: 0 }} animate={{ opacity: 0.12 }} transition={{ delay: 0.1, duration: 0.5 }} />
      </div>

      <motion.div className="mt-6 w-full rounded-2xl bg-white p-4 shadow-sm" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-medium">Memory card</div>
            <div className="text-xs text-gray-500">2s blink → flip</div>
          </div>
          <div className="text-xs text-gray-400">🥰</div>
        </div>

        <div className="mt-3 text-sm text-gray-600">When the blink finishes, the photo flips into this card. Add caption, doodle, or voice note.</div>

        <div className="mt-4 flex gap-2">
          <button className="px-3 py-2 rounded-xl border text-sm">Add doodle</button>
          <button className="px-3 py-2 rounded-xl border text-sm">Voice note</button>
        </div>
      </motion.div>
    </div>
  )
}

function Step({ title, desc }) {
  return (
    <div className="p-4 bg-white rounded-xl shadow-sm">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-2 text-sm text-gray-600">{desc}</div>
    </div>
  )
}

function DeckCard({ title, subtitle, count, colorFrom, colorTo }) {
  return (
    <div className="p-4 rounded-2xl shadow-md" style={{ background: `linear-gradient(135deg, ${colorFrom}, ${colorTo})` }}>
      <div className="text-sm font-semibold">{title}</div>
      <div className="text-xs text-gray-600">{subtitle}</div>
      <div className="mt-4 text-3xl font-bold">{count}</div>
    </div>
  )
}

function Card({ title, body }) {
  return (
    <div className="p-4 bg-white rounded-2xl shadow-sm">
      <div className="font-semibold">{title}</div>
      <div className="mt-2 text-sm text-gray-600">{body}</div>
    </div>
  )
}

function Palette() {
  return (
    <div className="flex gap-2 items-center">
      <div className="w-8 h-8 rounded-lg" style={{ background: '#FFD1DC' }} />
      <div className="w-8 h-8 rounded-lg" style={{ background: '#FFF3E8' }} />
      <div className="w-8 h-8 rounded-lg" style={{ background: '#DDEBFF' }} />
      <div className="w-8 h-8 rounded-lg" style={{ background: '#E9F9F1' }} />
    </div>
  )
}

function Typography() {
  return (
    <div>
      <div className="font-semibold">Inter / System UI</div>
      <div className="text-sm text-gray-600 mt-2">Headlines: 700 40px, Body: 16px Regular</div>
    </div>
  )
}

function MotionNotes() {
  return (
    <div className="text-sm text-gray-600">
      Subtle easing (cubic-bezier(.2,.9,.2,1)), durations 180ms to 600ms, micro-interactions on hover and tap.
    </div>
  )
}
