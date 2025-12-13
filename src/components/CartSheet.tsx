'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Minus, Plus, X, ShoppingBag } from 'lucide-react';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useCartStore } from '@/lib/store';

export default function CartSheet() {
    const {
        items,
        isOpen,
        closeCart,
        removeItem,
        updateQuantity,
        getTotalPrice,
    } = useCartStore();

    const totalPrice = getTotalPrice();

    return (
        <Sheet open={isOpen} onOpenChange={(open) => !open && closeCart()}>
            <SheetContent className="w-full sm:max-w-lg flex flex-col">
                <SheetHeader>
                    <SheetTitle className="text-xl font-bold uppercase tracking-wider flex items-center gap-2">
                        <ShoppingBag className="w-5 h-5" />
                        Sepetim
                    </SheetTitle>
                </SheetHeader>

                <Separator className="my-4" />

                {items.length === 0 ? (
                    <div className="flex-1 flex flex-col items-center justify-center text-center">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mb-6"
                        >
                            <ShoppingBag className="w-12 h-12 text-muted-foreground" />
                        </motion.div>
                        <h3 className="text-lg font-bold mb-2">Sepetiniz Boş</h3>
                        <p className="text-muted-foreground mb-6">
                            Henüz sepetinize ürün eklemediniz.
                        </p>
                        <Button asChild onClick={closeCart}>
                            <Link href="/magaza">Alışverişe Başla</Link>
                        </Button>
                    </div>
                ) : (
                    <>
                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                            {items.map((item, index) => (
                                <motion.div
                                    key={`${item.product.id}-${item.size}`}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex gap-4 p-4 bg-secondary/50 rounded-lg"
                                >
                                    {/* Product Image */}
                                    <div className="relative w-20 h-20 rounded-md overflow-hidden bg-background flex-shrink-0">
                                        <Image
                                            src={item.product.image}
                                            alt={item.product.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Product Details */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between gap-2">
                                            <div>
                                                <h4 className="font-bold text-sm truncate">
                                                    {item.product.name}
                                                </h4>
                                                <p className="text-xs text-muted-foreground">
                                                    Beden: {item.size}
                                                </p>
                                            </div>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-6 w-6 text-muted-foreground hover:text-destructive"
                                                onClick={() => removeItem(item.product.id, item.size)}
                                            >
                                                <X className="w-4 h-4" />
                                            </Button>
                                        </div>

                                        <div className="flex items-center justify-between mt-3">
                                            {/* Quantity Controls */}
                                            <div className="flex items-center gap-2 bg-background rounded-md">
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-8 w-8"
                                                    onClick={() =>
                                                        updateQuantity(
                                                            item.product.id,
                                                            item.size,
                                                            item.quantity - 1
                                                        )
                                                    }
                                                >
                                                    <Minus className="w-3 h-3" />
                                                </Button>
                                                <span className="text-sm font-medium w-6 text-center">
                                                    {item.quantity}
                                                </span>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-8 w-8"
                                                    onClick={() =>
                                                        updateQuantity(
                                                            item.product.id,
                                                            item.size,
                                                            item.quantity + 1
                                                        )
                                                    }
                                                >
                                                    <Plus className="w-3 h-3" />
                                                </Button>
                                            </div>

                                            {/* Price */}
                                            <p className="font-bold text-sm">
                                                {(item.product.price * item.quantity).toLocaleString('tr-TR')} ₺
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Cart Footer */}
                        <div className="border-t border-border pt-4 mt-4 space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-muted-foreground">Ara Toplam</span>
                                <span className="font-bold text-lg">
                                    {totalPrice.toLocaleString('tr-TR')} ₺
                                </span>
                            </div>
                            <p className="text-xs text-muted-foreground">
                                Kargo ve vergiler ödeme sırasında hesaplanacaktır.
                            </p>
                            <Button className="w-full h-12 text-lg font-bold uppercase tracking-wider" size="lg">
                                Ödemeye Geç
                            </Button>
                            <Button
                                variant="outline"
                                className="w-full"
                                onClick={closeCart}
                                asChild
                            >
                                <Link href="/magaza">Alışverişe Devam Et</Link>
                            </Button>
                        </div>
                    </>
                )}
            </SheetContent>
        </Sheet>
    );
}
