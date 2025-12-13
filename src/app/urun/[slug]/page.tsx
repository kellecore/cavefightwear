'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus, ShoppingBag, ChevronLeft, Check, Truck, Shield, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import ProductCard from '@/components/ProductCard';
import { getProductBySlug, products } from '@/lib/data';
import { useCartStore } from '@/lib/store';

export default function ProductDetailPage() {
    const params = useParams();
    const slug = params.slug as string;
    const product = getProductBySlug(slug);

    const [selectedSize, setSelectedSize] = useState<string>('');
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);
    const [isAdded, setIsAdded] = useState(false);

    const { addItem } = useCartStore();

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Ürün Bulunamadı</h1>
                    <p className="text-muted-foreground mb-6">Aradığınız ürün mevcut değil.</p>
                    <Button asChild>
                        <Link href="/magaza">Mağazaya Dön</Link>
                    </Button>
                </div>
            </div>
        );
    }

    const images = [product.image, product.hoverImage].filter(Boolean) as string[];
    const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 2);

    const handleAddToCart = () => {
        if (!selectedSize) return;

        for (let i = 0; i < quantity; i++) {
            addItem(product, selectedSize);
        }

        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    return (
        <div className="min-h-screen py-8">
            <div className="container mx-auto px-4">
                {/* Breadcrumb */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <Link
                        href="/magaza"
                        className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <ChevronLeft className="w-4 h-4 mr-1" />
                        Mağazaya Dön
                    </Link>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Image Gallery */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-4"
                    >
                        {/* Main Image */}
                        <div className="relative aspect-square rounded-lg overflow-hidden bg-secondary/50">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={selectedImage}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={images[selectedImage]}
                                        alt={product.name}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </motion.div>
                            </AnimatePresence>
                            <Badge className="absolute top-4 left-4 bg-red-600 text-white">
                                {product.category}
                            </Badge>
                        </div>

                        {/* Thumbnails */}
                        {images.length > 1 && (
                            <div className="flex gap-4">
                                {images.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        className={`relative w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${selectedImage === index
                                                ? 'border-red-600'
                                                : 'border-border hover:border-muted-foreground'
                                            }`}
                                    >
                                        <Image
                                            src={image}
                                            alt={`${product.name} - Görsel ${index + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </motion.div>

                    {/* Product Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                    >
                        <div>
                            <Badge variant="secondary" className="mb-4">
                                {product.category}
                            </Badge>
                            <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
                            <p className="text-4xl font-bold text-red-600">
                                {product.price.toLocaleString('tr-TR')} <span className="text-2xl">₺</span>
                            </p>
                        </div>

                        <Separator />

                        <p className="text-muted-foreground text-lg leading-relaxed">
                            {product.description}
                        </p>

                        {/* Size Selector */}
                        <div>
                            <h3 className="font-bold mb-3 uppercase tracking-wider">Beden Seçin</h3>
                            <div className="flex flex-wrap gap-3">
                                {product.sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`w-14 h-14 rounded-md border-2 font-bold text-lg transition-all ${selectedSize === size
                                                ? 'border-red-600 bg-red-600 text-white'
                                                : 'border-border hover:border-muted-foreground'
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                            {!selectedSize && (
                                <p className="text-sm text-muted-foreground mt-2">
                                    Lütfen bir beden seçin
                                </p>
                            )}
                        </div>

                        {/* Quantity */}
                        <div>
                            <h3 className="font-bold mb-3 uppercase tracking-wider">Adet</h3>
                            <div className="flex items-center gap-4 bg-secondary rounded-lg w-fit">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    disabled={quantity <= 1}
                                >
                                    <Minus className="w-4 h-4" />
                                </Button>
                                <span className="text-xl font-bold w-8 text-center">{quantity}</span>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => setQuantity(quantity + 1)}
                                >
                                    <Plus className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>

                        {/* Add to Cart */}
                        <Button
                            size="lg"
                            className={`w-full h-14 text-lg font-bold uppercase tracking-wider transition-all ${isAdded
                                    ? 'bg-green-600 hover:bg-green-700'
                                    : 'bg-red-600 hover:bg-red-700'
                                }`}
                            onClick={handleAddToCart}
                            disabled={!selectedSize}
                        >
                            {isAdded ? (
                                <>
                                    <Check className="w-5 h-5 mr-2" />
                                    Sepete Eklendi!
                                </>
                            ) : (
                                <>
                                    <ShoppingBag className="w-5 h-5 mr-2" />
                                    Sepete Ekle
                                </>
                            )}
                        </Button>

                        {/* Features */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <Truck className="w-5 h-5 text-red-600" />
                                <span>Ücretsiz Kargo</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <Shield className="w-5 h-5 text-red-600" />
                                <span>Güvenli Ödeme</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <RotateCcw className="w-5 h-5 text-red-600" />
                                <span>Kolay İade</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <section className="mt-24">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl font-bold mb-4">
                                İLGİLİ <span className="text-red-600">ÜRÜNLER</span>
                            </h2>
                            <p className="text-muted-foreground">
                                Bu ürünü beğendiyseniz, bunlara da göz atın.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                            {relatedProducts.map((product, index) => (
                                <ProductCard key={product.id} product={product} index={index} />
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
}
