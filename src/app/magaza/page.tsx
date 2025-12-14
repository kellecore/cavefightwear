'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import ProductCard from '@/components/ProductCard';
import { products, getAllCategories, Category } from '@/lib/data';

type SortOption = 'default' | 'price-asc' | 'price-desc' | 'name';

export default function ShopPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
    const [sortBy, setSortBy] = useState<SortOption>('default');
    const [showFilters, setShowFilters] = useState(false);

    const categories = getAllCategories();

    const filteredProducts = useMemo(() => {
        let result = [...products];

        // Filter by search query
        if (searchQuery) {
            result = result.filter(
                (product) =>
                    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    product.description.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Filter by category
        if (selectedCategory !== 'all') {
            result = result.filter((product) => product.category === selectedCategory);
        }

        // Sort
        switch (sortBy) {
            case 'price-asc':
                result.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                result.sort((a, b) => b.price - a.price);
                break;
            case 'name':
                result.sort((a, b) => a.name.localeCompare(b.name));
                break;
        }

        return result;
    }, [searchQuery, selectedCategory, sortBy]);

    const clearFilters = () => {
        setSearchQuery('');
        setSelectedCategory('all');
        setSortBy('default');
    };

    const hasActiveFilters = searchQuery || selectedCategory !== 'all' || sortBy !== 'default';

    return (
        <div className="min-h-screen py-12">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8 md:mb-12"
                >
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
                        <span className="text-white">MAĞAZA</span>
                    </h1>
                    <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto px-4">
                        Premium dövüş sporları ekipmanları koleksiyonumuzu keşfedin.
                    </p>
                </motion.div>

                {/* Filters Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-card border border-border rounded-lg p-4 mb-8"
                >
                    <div className="flex flex-col lg:flex-row gap-4">
                        {/* Search */}
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input
                                placeholder="Ürün ara..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10 h-12"
                            />
                        </div>

                        {/* Category Filter */}
                        <Select
                            value={selectedCategory}
                            onValueChange={(value) => setSelectedCategory(value as Category | 'all')}
                        >
                            <SelectTrigger className="w-full lg:w-48 h-12">
                                <SelectValue placeholder="Kategori" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">Tüm Kategoriler</SelectItem>
                                {categories.map((category) => (
                                    <SelectItem key={category} value={category}>
                                        {category}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        {/* Sort */}
                        <Select
                            value={sortBy}
                            onValueChange={(value) => setSortBy(value as SortOption)}
                        >
                            <SelectTrigger className="w-full lg:w-48 h-12">
                                <SelectValue placeholder="Sırala" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="default">Varsayılan</SelectItem>
                                <SelectItem value="price-asc">Fiyat: Düşükten Yükseğe</SelectItem>
                                <SelectItem value="price-desc">Fiyat: Yüksekten Düşüğe</SelectItem>
                                <SelectItem value="name">İsme Göre</SelectItem>
                            </SelectContent>
                        </Select>

                        {/* Mobile Filter Toggle */}
                        <Button
                            variant="outline"
                            className="lg:hidden h-12"
                            onClick={() => setShowFilters(!showFilters)}
                        >
                            <SlidersHorizontal className="w-5 h-5 mr-2" />
                            Filtreler
                        </Button>
                    </div>

                    {/* Active Filters */}
                    {hasActiveFilters && (
                        <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-border">
                            <span className="text-sm text-muted-foreground">Aktif Filtreler:</span>
                            {searchQuery && (
                                <Badge variant="secondary" className="flex items-center gap-1">
                                    Arama: {searchQuery}
                                    <X
                                        className="w-3 h-3 cursor-pointer"
                                        onClick={() => setSearchQuery('')}
                                    />
                                </Badge>
                            )}
                            {selectedCategory !== 'all' && (
                                <Badge variant="secondary" className="flex items-center gap-1">
                                    {selectedCategory}
                                    <X
                                        className="w-3 h-3 cursor-pointer"
                                        onClick={() => setSelectedCategory('all')}
                                    />
                                </Badge>
                            )}
                            {sortBy !== 'default' && (
                                <Badge variant="secondary" className="flex items-center gap-1">
                                    Sıralama: {sortBy === 'price-asc' ? 'Fiyat ↑' : sortBy === 'price-desc' ? 'Fiyat ↓' : 'İsim'}
                                    <X
                                        className="w-3 h-3 cursor-pointer"
                                        onClick={() => setSortBy('default')}
                                    />
                                </Badge>
                            )}
                            <Button variant="ghost" size="sm" onClick={clearFilters}>
                                Tümünü Temizle
                            </Button>
                        </div>
                    )}
                </motion.div>

                {/* Results Count */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mb-6"
                >
                    <p className="text-muted-foreground">
                        {filteredProducts.length} ürün bulundu
                    </p>
                </motion.div>

                {/* Products Grid */}
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
                        {filteredProducts.map((product, index) => (
                            <ProductCard key={product.id} product={product} index={index} />
                        ))}
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-20"
                    >
                        <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
                            <Search className="w-12 h-12 text-muted-foreground" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Ürün Bulunamadı</h3>
                        <p className="text-muted-foreground mb-6">
                            Arama kriterlerinize uygun ürün bulunamadı.
                        </p>
                        <Button onClick={clearFilters}>Filtreleri Temizle</Button>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
