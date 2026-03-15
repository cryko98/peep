/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Copy, Check, Send, ExternalLink, TrendingUp, DollarSign } from 'lucide-react';

const PUMP_VALUES = [
  '+$5000', '+$200', '+$1000', '+$750', '+$250', '+$500', '+$2000', '+$100', '+$5000', '+$275'
];

function FloatingValue({ delay, x, y }: { delay: number; x: string; y: string; key?: React.Key }) {
  const value = PUMP_VALUES[Math.floor(Math.random() * PUMP_VALUES.length)];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: [0, 0.8, 0],
        y: [-20, -100],
        scale: [0.8, 1.1, 0.9]
      }}
      transition={{ 
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        delay: delay,
        ease: "easeOut"
      }}
      className="absolute pointer-events-none text-white/40 font-mono font-bold text-xl md:text-3xl"
      style={{ left: x, top: y }}
    >
      {value}
    </motion.div>
  );
}

export default function App() {
  const [copied, setCopied] = useState(false);
  const ca = "xxxxxxxxxxxxxxxxxxxxxxxxxx";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(ca);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-hidden font-sans">
      {/* Background Pump Animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <FloatingValue 
            key={i} 
            delay={i * 0.5} 
            x={`${Math.random() * 100}%`} 
            y={`${Math.random() * 100}%`} 
          />
        ))}
        
        {/* Stylized Chart Lines in Background */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path 
            d="M0,800 L100,750 L200,780 L300,600 L400,650 L500,400 L600,450 L700,200 L800,250 L900,50 L1000,0" 
            fill="none" 
            stroke="white" 
            strokeWidth="2"
          />
          <path 
            d="M0,900 L150,850 L300,880 L450,700 L600,750 L750,500 L900,550 L1000,300" 
            fill="none" 
            stroke="white" 
            strokeWidth="1"
            strokeDasharray="5,5"
          />
        </svg>
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
        
        {/* Logo Section */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-12"
        >
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-8 border-neutral-800 bg-black flex items-center justify-center overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.15)] relative">
            <img 
              src="https://lcaryepoaiuzuppladzq.supabase.co/storage/v1/object/public/ccc/peeep.png" 
              alt="PepeEnjoysEndlessPumps Logo"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Decorative Ring */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-4 border border-white/10 rounded-full border-dashed"
          />
        </motion.div>

        {/* Title Section */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-7xl font-black tracking-tighter mb-2 italic"
          >
            PepeEnjoysEndlessPumps
          </motion.h1>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-4"
          >
            <span className="text-2xl md:text-4xl font-mono font-bold text-neutral-400">$PEEP</span>
            <div className="h-1 w-12 bg-white/20 rounded-full" />
            <div className="flex items-center text-emerald-500 font-bold">
              <TrendingUp className="w-6 h-6 mr-1" />
              <span>ENDLESS PUMP</span>
            </div>
          </motion.div>
        </div>

        {/* CA Box */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="w-full max-w-xl mb-12"
        >
          <div className="bg-neutral-900/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex flex-col md:flex-row items-center gap-4 shadow-2xl">
            <div className="flex-1 font-mono text-sm md:text-base break-all text-neutral-300 px-2">
              <span className="text-white/40 mr-2">CA:</span>
              {ca}
            </div>
            <button 
              onClick={copyToClipboard}
              className="w-full md:w-auto bg-white text-black px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>COPIED</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>COPY CA</span>
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* About Section */}
        <motion.section 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-2xl text-center mb-16"
        >
          <h2 className="text-xl font-bold uppercase tracking-widest text-white/40 mb-4">About $PEEP</h2>
          <p className="text-lg md:text-2xl leading-relaxed font-medium text-neutral-200">
            Pepe is tired of the dips. With <span className="text-white font-bold">$PEEP</span>, he finally found his inner peace. 
            Pepe enjoys the continuous rise and profits that come with this coin. 
            No more red candles, just <span className="italic">Endless Pumps</span>.
          </p>
        </motion.section>

        {/* Socials */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center gap-6"
        >
          <a 
            href="https://t.me/pepepumps" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-neutral-900 border border-white/10 px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            <Send className="w-6 h-6" />
            <span className="font-bold text-lg">TELEGRAM</span>
          </a>
          
          <a 
            href="#" 
            className="p-4 rounded-full border border-white/10 hover:border-white/40 transition-colors"
          >
            <ExternalLink className="w-6 h-6" />
          </a>
        </motion.div>

        {/* Footer Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl border-t border-white/5 pt-12">
          {[
            { label: 'LIQUIDITY', value: 'BURNED' },
            { label: 'TAX', value: '0/0' },
            { label: 'SUPPLY', value: '1B' },
            { label: 'NETWORK', value: 'SOLANA' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-xs font-bold text-white/30 uppercase mb-1">{stat.label}</div>
              <div className="text-xl font-black">{stat.value}</div>
            </div>
          ))}
        </div>
      </main>

      {/* Floating Action Button (Buy) */}
      <motion.div 
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <button className="bg-white text-black font-black px-8 py-4 rounded-full shadow-[0_10px_30px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform flex items-center gap-2">
          <DollarSign className="w-5 h-5" />
          BUY $PEEP
        </button>
      </motion.div>
    </div>
  );
}
