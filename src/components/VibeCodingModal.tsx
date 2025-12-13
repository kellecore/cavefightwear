'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Cpu } from 'lucide-react';
import { Button } from './ui/button';

export default function VibeCodingModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem('vibe-coding-seen');
    if (!hasSeenModal) {
      // Biraz gecikmeli gelsin ki site yüklendikten sonra 'bam' diye çıkmasın
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('vibe-coding-seen', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/20 bg-black/40 p-6 text-center text-white shadow-2xl backdrop-blur-xl"
          >
            {/* Dekoratif Gradient Arkaplan */}
            <div className="absolute -top-20 -left-20 h-40 w-40 rounded-full bg-red-600/30 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-blue-600/30 blur-3xl" />

            {/* İçerik */}
            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur-md">
                <Sparkles className="h-8 w-8 text-yellow-400" />
              </div>

              <h2 className="text-2xl font-bold tracking-tight">Vibe Coding Project</h2>
              
              <p className="text-white/80 leading-relaxed">
                Bu platform, <span className="font-semibold text-white">Yapay Zeka</span> ve insan yaratıcılığının birleşimiyle, anın ritmine kapılarak kodlanmıştır.
              </p>
              
              <div className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 text-xs font-medium text-white/60 ring-1 ring-white/10">
                <Cpu className="h-3 w-3" />
                <span>AI Powered Development</span>
              </div>

              <Button 
                onClick={handleClose}
                className="mt-4 w-full bg-white text-black hover:bg-white/90 font-semibold transition-transform active:scale-95"
              >
                Keşfetmeye Başla
              </Button>
            </div>

            {/* Kapat butonu */}
            <button 
              onClick={handleClose}
              className="absolute top-4 right-4 rounded-full p-1 text-white/50 hover:bg-white/10 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
