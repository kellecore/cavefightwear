'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Product } from '@/lib/data';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
    product: Product;
    index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
        >
            <Link href={`/urun/${product.slug}`}>
                <motion.div
                    className="group relative bg-card rounded-lg overflow-hidden border border-border hover:border-red-600/50 transition-all duration-300"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    whileHover={{ y: -5 }}
                >
                    {/* Image Container */}
                    <div className="relative aspect-square overflow-hidden bg-secondary/50">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className={`object-cover transition-all duration-500 ${isHovered && product.hoverImage ? 'opacity-0' : 'opacity-100'
                                }`}
                        />
                        {product.hoverImage && (
                            <Image
                                src={product.hoverImage}
                                alt={`${product.name} - Alternatif`}
                                fill
                                className={`object-cover transition-all duration-500 absolute inset-0 ${isHovered ? 'opacity-100' : 'opacity-0'
                                    }`}
                            />
                        )}

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Quick View Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
                            className="absolute bottom-4 left-4 right-4"
                        >
                            <div className="bg-white text-black text-center py-3 rounded-md font-bold uppercase tracking-wider text-sm hover:bg-red-600 hover:text-white transition-colors">
                                Ürünü İncele
                            </div>
                        </motion.div>

                        {/* Category Badge */}
                        <Badge
                            variant="secondary"
                            className="absolute top-4 left-4 bg-red-600 text-white hover:bg-red-700"
                        >
                            {product.category}
                        </Badge>
                    </div>

                    {/* Product Info */}
                    <div className="p-4">
                        <h3 className="font-bold text-lg uppercase tracking-wider mb-2 group-hover:text-red-500 transition-colors">
                            {product.name}
                        </h3>
                        <p className="text-2xl font-bold">
                            {product.price.toLocaleString('tr-TR')} <span className="text-lg">₺</span>
                        </p>
                    </div>
                </motion.div>
            </Link>
        </motion.div>
    );
}
