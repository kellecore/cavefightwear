'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Product } from '@/lib/data';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
    product: Product;
    index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: Math.min(index * 0.05, 0.3), duration: 0.4 }}
            viewport={{ once: true, margin: "-50px" }}
        >
            <Link href={`/urun/${product.slug}`}>
                <motion.div
                    className="group relative bg-card rounded-lg overflow-hidden border border-border hover:border-red-600/50 transition-all duration-300"
                    onMouseEnter={() => !isMobile && setIsHovered(true)}
                    onMouseLeave={() => !isMobile && setIsHovered(false)}
                    whileHover={isMobile ? {} : { y: -5 }}
                    whileTap={{ scale: 0.98 }}
                >
                    {/* Image Container */}
                    <div className="relative aspect-square overflow-hidden bg-secondary/50">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            loading={index < 4 ? "eager" : "lazy"}
                            className={`object-cover transition-all duration-300 ${!isMobile && isHovered && product.hoverImage ? 'opacity-0' : 'opacity-100'
                                }`}
                        />
                        {product.hoverImage && !isMobile && (
                            <Image
                                src={product.hoverImage}
                                alt={`${product.name} - Alternatif`}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                loading="lazy"
                                className={`object-cover transition-all duration-300 absolute inset-0 ${isHovered ? 'opacity-100' : 'opacity-0'
                                    }`}
                            />
                        )}

                        {/* Overlay - Always visible on mobile */}
                        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />

                        {/* Quick View Button - Always visible on mobile */}
                        <motion.div
                            initial={false}
                            animate={{
                                opacity: isMobile || isHovered ? 1 : 0,
                                y: isMobile || isHovered ? 0 : 10
                            }}
                            className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4"
                        >
                            <div className="bg-white text-black text-center py-2.5 md:py-3 rounded-md font-bold uppercase tracking-wider text-xs md:text-sm hover:bg-red-600 hover:text-white transition-colors active:scale-95">
                                Ürünü İncele
                            </div>
                        </motion.div>

                        {/* Category Badge */}
                        <Badge
                            variant="secondary"
                            className="absolute top-3 left-3 md:top-4 md:left-4 bg-red-600 text-white hover:bg-red-700 text-xs"
                        >
                            {product.category}
                        </Badge>
                    </div>

                    {/* Product Info */}
                    <div className="p-3 md:p-4">
                        <h3 className="font-bold text-sm md:text-lg uppercase tracking-wider mb-1 md:mb-2 group-hover:text-red-500 transition-colors line-clamp-1">
                            {product.name}
                        </h3>
                        <p className="text-xl md:text-2xl font-bold">
                            {product.price.toLocaleString('tr-TR')} <span className="text-base md:text-lg">₺</span>
                        </p>
                    </div>
                </motion.div>
            </Link>
        </motion.div>
    );
}

