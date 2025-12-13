'use client';

import Link from 'next/link';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import { getFeaturedProducts } from '@/lib/data';

// Snow Particle Component
function SnowParticles() {
  const [particles, setParticles] = useState<Array<{ id: number; left: number; delay: number; duration: number; size: number; opacity: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 12,
      size: 2 + Math.random() * 4,
      opacity: 0.1 + Math.random() * 0.3,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${particle.left}%`,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
          }}
          initial={{ y: -20, x: 0 }}
          animate={{
            y: ['0vh', '100vh'],
            x: [0, Math.sin(particle.id) * 30, 0],
          }}
          transition={{
            y: {
              duration: particle.duration,
              repeat: Infinity,
              ease: 'linear',
              delay: particle.delay,
            },
            x: {
              duration: particle.duration / 2,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
              delay: particle.delay,
            },
          }}
        />
      ))}
    </div>
  );
}

// Interactive Gradient Background Component
function InteractiveGradient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const smoothX = useSpring(mouseX, { stiffness: 30, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 30, damping: 30 });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
    );
  }

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      {/* Primary red gradient blob following mouse */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full opacity-30 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, #dc2626 0%, transparent 70%)',
          left: smoothX.get() * 100 + '%',
          top: smoothY.get() * 100 + '%',
          x: '-50%',
          y: '-50%',
        }}
        animate={{
          left: `calc(${smoothX.get() * 100}%)`,
          top: `calc(${smoothY.get() * 100}%)`,
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />

      {/* Secondary purple gradient blob */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[100px]"
        style={{
          background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)',
          right: smoothX.get() * 50 + '%',
          bottom: smoothY.get() * 50 + '%',
        }}
        animate={{
          right: `calc(${smoothX.get() * 50}%)`,
          bottom: `calc(${smoothY.get() * 50}%)`,
        }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />

      {/* Animated floating orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-10 blur-[80px]"
        style={{
          background: 'radial-gradient(circle, #f59e0b 0%, transparent 70%)',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Grid overlay for tech feel */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
        }}
      />

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />

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
      <section className="relative h-screen overflow-hidden">
        {/* Interactive Gradient Background */}
        <InteractiveGradient />

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Animated Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
              >
                <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                <span className="text-sm text-gray-300 uppercase tracking-wider">WEBSITE AI YAPILARAK GELISTIRILDI | VIBE CODING</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-wider leading-[1.1]">
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
                className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
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
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              EN ÇOK <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">SATANLAR</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Savaşçıların en çok tercih ettiği ürünlerimizi keşfedin.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
