'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import { getFeaturedProducts } from '@/lib/data';

// Optimized CSS-based Snow Particle Component
function SnowParticles() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; left: number; delay: number; duration: number; size: number; opacity: number }>>([]);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      // Generate particles client-side only to avoid hydration mismatch
      const count = mobile ? 15 : 30;
      const newParticles = Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 12 + Math.random() * 8,
        size: 2 + Math.random() * 3,
        opacity: 0.15 + Math.random() * 0.2,
      }));
      setParticles(newParticles);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!mounted || particles.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <style jsx>{`
        @keyframes snowfall {
          0% { transform: translateY(-10vh) translateX(0); }
          50% { transform: translateY(55vh) translateX(10px); }
          100% { transform: translateY(120vh) translateX(0); }
        }
        .snow-particle {
          position: absolute;
          border-radius: 50%;
          background: white;
          will-change: transform;
          animation: snowfall linear infinite;
        }
      `}</style>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="snow-particle"
          style={{
            left: `${particle.left}%`,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

// Simplified Gradient Background Component - Better Performance
function InteractiveGradient() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      {/* Static red gradient blob - no mouse tracking on mobile for performance */}
      <div
        className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full opacity-20 md:opacity-25 blur-[80px] md:blur-[100px] will-change-transform"
        style={{
          background: 'radial-gradient(circle, #dc2626 0%, transparent 70%)',
          left: '30%',
          top: '40%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Secondary purple gradient blob */}
      <div
        className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full opacity-15 md:opacity-20 blur-[60px] md:blur-[80px] will-change-transform"
        style={{
          background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)',
          right: '10%',
          bottom: '20%',
        }}
      />

      {/* Animated floating orb - CSS animation */}
      <div
        className="absolute w-64 h-64 md:w-96 md:h-96 rounded-full opacity-10 blur-[60px] animate-pulse"
        style={{
          background: 'radial-gradient(circle, #f59e0b 0%, transparent 70%)',
          left: '60%',
          top: '30%',
        }}
      />

      {/* Grid overlay for tech feel - hidden on mobile */}
      <div
        className="absolute inset-0 opacity-[0.02] hidden md:block"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)]" />

      {/* Snow particles */}
      <SnowParticles />
    </div>
  );
}

export default function HomePage() {
  const products = getFeaturedProducts();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[100svh] md:h-screen overflow-hidden">
        {/* Interactive Gradient Background */}
        <InteractiveGradient />

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center py-20 md:py-0">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* Animated Badge - Smaller on mobile */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 md:px-4 md:py-2 mb-6 md:mb-8"
              >
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-red-600 rounded-full animate-pulse" />
                <span className="text-[10px] md:text-sm text-gray-300 uppercase tracking-wider">AI İLE GELİŞTİRİLDİ</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 tracking-wider leading-[1.1]">
                <motion.span
                  className="text-white block pb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
                >
                  SAVAŞÇININ
                </motion.span>
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-orange-500 block pt-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
                >
                  TERCİHİ
                </motion.span>
              </h1>

              <motion.p
                className="text-base sm:text-xl md:text-2xl text-gray-400 mb-6 md:mb-10 max-w-2xl mx-auto px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Premium dövüş sporları ekipmanları. Profesyoneller için tasarlandı.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="h-14 px-8 text-lg font-bold uppercase tracking-wider bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-lg shadow-red-600/25"
                >
                  <Link href="/magaza">
                    Mağazaya Git <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-14 px-8 text-lg font-bold uppercase tracking-wider border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10"
                >
                  <Link href="/hikayemiz">
                    <Play className="mr-2 w-5 h-5" /> Hikayemiz
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-red-500 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 md:py-24 bg-background relative overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
              EN ÇOK <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">SATANLAR</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto px-4">
              Savaşçıların en çok tercih ettiği ürünlerimizi keşfedin.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-8 max-w-4xl mx-auto">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 px-8 font-bold uppercase tracking-wider border-white/20 hover:bg-white/10"
            >
              <Link href="/magaza">Tüm Ürünleri Gör</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Brand Story Section with Interactive Gradient */}
      <section className="relative py-32 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black" />
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-purple-900/20" />

        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-red-500 font-bold text-lg tracking-wider mb-4 block">
                CAVE FELSEFESİ
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                MAĞARADA
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">DÖVÜŞÇÜ</span>
                <br />
                DOĞAR
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Her şampiyon karanlıkta başlar. Mağaranın derinliklerinde, ter, kan ve
                azimle yoğrulur. Cave Fightwear, bu yolculuğun her adımında yanınızda.
                Premium kalite, dayanıklılık ve stil bir arada.
              </p>
              <Button
                asChild
                size="lg"
                className="h-14 px-8 text-lg font-bold uppercase tracking-wider bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
              >
                <Link href="/hikayemiz">
                  Hikayemizi Keşfet <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card/50 border-y border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 via-transparent to-red-600/5" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '1000+', label: 'Mutlu Müşteri' },
              { value: '50+', label: 'Ürün Çeşidi' },
              { value: '7/24', label: 'Destek' },
              { value: '%100', label: 'Memnuniyet' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground uppercase tracking-wider text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-gray-900 to-background" />
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, #dc2626 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, #dc2626 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, #dc2626 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              SAVAŞA <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">HAZIR MISIN?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Cave Fightwear ile savaşçı ruhunu ortaya çıkar. Premium ekipmanlarla
              antrenmanlarını bir üst seviyeye taşı.
            </p>
            <Button
              asChild
              size="lg"
              className="h-14 px-12 text-lg font-bold uppercase tracking-wider bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-lg shadow-red-600/25"
            >
              <Link href="/magaza">Hemen Alışverişe Başla</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
