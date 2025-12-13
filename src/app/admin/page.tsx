'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    TrendingUp,
    Package,
    Users,
    DollarSign,
    Edit,
    Trash2,
    Plus,
    ShoppingCart,
    Eye,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { products, adminAnalytics } from '@/lib/data';

const stats = [
    {
        title: 'Toplam Gelir',
        value: `${adminAnalytics.totalRevenue.toLocaleString('tr-TR')} ₺`,
        icon: DollarSign,
        change: '+12%',
        changeType: 'positive' as const,
    },
    {
        title: 'Toplam Sipariş',
        value: adminAnalytics.totalOrders.toString(),
        icon: ShoppingCart,
        change: '+8%',
        changeType: 'positive' as const,
    },
    {
        title: 'Toplam Ürün',
        value: adminAnalytics.totalProducts.toString(),
        icon: Package,
        change: '0%',
        changeType: 'neutral' as const,
    },
    {
        title: 'Toplam Müşteri',
        value: adminAnalytics.totalCustomers.toString(),
        icon: Users,
        change: '+15%',
        changeType: 'positive' as const,
    },
];

export default function AdminPage() {
    const [productList, setProductList] = useState(products);
    const [editingProduct, setEditingProduct] = useState<typeof products[0] | null>(null);

    const handleDeleteProduct = (id: string) => {
        setProductList(productList.filter((p) => p.id !== id));
    };

    return (
        <div className="min-h-screen py-12">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-white">ADMIN</span>{' '}
                        <span className="text-red-600">PANELİ</span>
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        Cave Fightwear yönetim paneline hoş geldiniz.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + index * 0.05 }}
                        >
                            <Card className="bg-card border-border hover:border-red-600/50 transition-colors">
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="w-12 h-12 rounded-lg bg-red-600/10 flex items-center justify-center">
                                            <stat.icon className="w-6 h-6 text-red-600" />
                                        </div>
                                        <Badge
                                            variant={stat.changeType === 'positive' ? 'default' : 'secondary'}
                                            className={
                                                stat.changeType === 'positive'
                                                    ? 'bg-green-600/20 text-green-500 hover:bg-green-600/30'
                                                    : ''
                                            }
                                        >
                                            <TrendingUp className="w-3 h-3 mr-1" />
                                            {stat.change}
                                        </Badge>
                                    </div>
                                    <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
                                    <p className="text-sm text-muted-foreground uppercase tracking-wider">
                                        {stat.title}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Recent Orders */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="lg:col-span-1"
                    >
                        <Card className="bg-card border-border h-full">
                            <CardHeader>
                                <CardTitle className="text-xl font-bold uppercase tracking-wider">
                                    Son Siparişler
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {adminAnalytics.recentOrders.map((order, index) => (
                                        <motion.div
                                            key={order.id}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.4 + index * 0.05 }}
                                            className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg"
                                        >
                                            <div className="flex-1 min-w-0">
                                                <p className="font-medium text-sm truncate">{order.customer}</p>
                                                <p className="text-xs text-muted-foreground truncate">
                                                    {order.product}
                                                </p>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-bold text-sm text-red-600">
                                                    {order.amount.toLocaleString('tr-TR')} ₺
                                                </p>
                                                <p className="text-xs text-muted-foreground">{order.date}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Products Table */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="lg:col-span-2"
                    >
                        <Card className="bg-card border-border">
                            <CardHeader className="flex flex-row items-center justify-between">
                                <CardTitle className="text-xl font-bold uppercase tracking-wider">
                                    Ürün Yönetimi
                                </CardTitle>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button size="sm" className="bg-red-600 hover:bg-red-700">
                                            <Plus className="w-4 h-4 mr-2" />
                                            Yeni Ürün
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Yeni Ürün Ekle</DialogTitle>
                                        </DialogHeader>
                                        <div className="space-y-4 py-4">
                                            <div>
                                                <label className="text-sm font-medium">Ürün Adı</label>
                                                <Input placeholder="Ürün adı girin" className="mt-1" />
                                            </div>
                                            <div>
                                                <label className="text-sm font-medium">Fiyat (₺)</label>
                                                <Input type="number" placeholder="0" className="mt-1" />
                                            </div>
                                            <div>
                                                <label className="text-sm font-medium">Kategori</label>
                                                <Input placeholder="Giyim / Aksesuar" className="mt-1" />
                                            </div>
                                            <Button className="w-full bg-red-600 hover:bg-red-700">
                                                Ürün Ekle
                                            </Button>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            </CardHeader>
                            <CardContent>
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b border-border">
                                                <th className="text-left py-3 px-4 text-sm font-bold uppercase tracking-wider text-muted-foreground">
                                                    Ürün
                                                </th>
                                                <th className="text-left py-3 px-4 text-sm font-bold uppercase tracking-wider text-muted-foreground">
                                                    Kategori
                                                </th>
                                                <th className="text-left py-3 px-4 text-sm font-bold uppercase tracking-wider text-muted-foreground">
                                                    Fiyat
                                                </th>
                                                <th className="text-right py-3 px-4 text-sm font-bold uppercase tracking-wider text-muted-foreground">
                                                    İşlemler
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {productList.map((product, index) => (
                                                <motion.tr
                                                    key={product.id}
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: 0.5 + index * 0.1 }}
                                                    className="border-b border-border/50 hover:bg-secondary/30 transition-colors"
                                                >
                                                    <td className="py-4 px-4">
                                                        <div className="flex items-center gap-3">
                                                            <div className="relative w-12 h-12 rounded-md overflow-hidden bg-secondary">
                                                                <Image
                                                                    src={product.image}
                                                                    alt={product.name}
                                                                    fill
                                                                    className="object-cover"
                                                                />
                                                            </div>
                                                            <span className="font-medium">{product.name}</span>
                                                        </div>
                                                    </td>
                                                    <td className="py-4 px-4">
                                                        <Badge variant="secondary">{product.category}</Badge>
                                                    </td>
                                                    <td className="py-4 px-4 font-bold">
                                                        {product.price.toLocaleString('tr-TR')} ₺
                                                    </td>
                                                    <td className="py-4 px-4">
                                                        <div className="flex items-center justify-end gap-2">
                                                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                                                <Eye className="w-4 h-4" />
                                                            </Button>
                                                            <Dialog>
                                                                <DialogTrigger asChild>
                                                                    <Button
                                                                        variant="ghost"
                                                                        size="icon"
                                                                        className="h-8 w-8"
                                                                        onClick={() => setEditingProduct(product)}
                                                                    >
                                                                        <Edit className="w-4 h-4" />
                                                                    </Button>
                                                                </DialogTrigger>
                                                                <DialogContent>
                                                                    <DialogHeader>
                                                                        <DialogTitle>Ürünü Düzenle</DialogTitle>
                                                                    </DialogHeader>
                                                                    <div className="space-y-4 py-4">
                                                                        <div>
                                                                            <label className="text-sm font-medium">Ürün Adı</label>
                                                                            <Input
                                                                                defaultValue={editingProduct?.name}
                                                                                className="mt-1"
                                                                            />
                                                                        </div>
                                                                        <div>
                                                                            <label className="text-sm font-medium">Fiyat (₺)</label>
                                                                            <Input
                                                                                type="number"
                                                                                defaultValue={editingProduct?.price}
                                                                                className="mt-1"
                                                                            />
                                                                        </div>
                                                                        <div>
                                                                            <label className="text-sm font-medium">Kategori</label>
                                                                            <Input
                                                                                defaultValue={editingProduct?.category}
                                                                                className="mt-1"
                                                                            />
                                                                        </div>
                                                                        <Button className="w-full bg-red-600 hover:bg-red-700">
                                                                            Kaydet
                                                                        </Button>
                                                                    </div>
                                                                </DialogContent>
                                                            </Dialog>
                                                            <Button
                                                                variant="ghost"
                                                                size="icon"
                                                                className="h-8 w-8 text-destructive hover:text-destructive"
                                                                onClick={() => handleDeleteProduct(product.id)}
                                                            >
                                                                <Trash2 className="w-4 h-4" />
                                                            </Button>
                                                        </div>
                                                    </td>
                                                </motion.tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                {/* Quick Stats Chart Placeholder */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-8"
                >
                    <Card className="bg-card border-border">
                        <CardHeader>
                            <CardTitle className="text-xl font-bold uppercase tracking-wider">
                                Satış Grafiği
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="h-64 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="flex items-end justify-center gap-2 mb-4">
                                        {[40, 65, 45, 80, 55, 70, 90].map((height, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ height: 0 }}
                                                animate={{ height: `${height}%` }}
                                                transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                                                className="w-8 bg-red-600 rounded-t-md"
                                                style={{ height: `${height}%` }}
                                            />
                                        ))}
                                    </div>
                                    <p className="text-muted-foreground text-sm">
                                        Son 7 günlük satış verileri (demo)
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}
