'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, Wrench, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// ⚠️ ADMIN PANELİ GEÇİCİ OLARAK DEVRE DIŞI
// Bu sayfayı tekrar aktif etmek için eski kodu geri yükleyin
// veya aşağıdaki ADMIN_ENABLED değerini true yapın

const ADMIN_ENABLED = false;

export default function AdminPage() {
    // Admin paneli devre dışı - bakım sayfası göster
    if (!ADMIN_ENABLED) {
        return (
            <div className="min-h-screen flex items-center justify-center py-12">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-lg mx-auto text-center"
                    >
                        {/* İkon */}
                        <motion.div
                            initial={{ rotate: 0 }}
                            animate={{ rotate: [0, -10, 10, -10, 0] }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="w-24 h-24 mx-auto mb-8 rounded-full bg-red-600/20 flex items-center justify-center"
                        >
                            <Wrench className="w-12 h-12 text-red-600" />
                        </motion.div>

                        {/* Başlık */}
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="text-white">BAKIM</span>{' '}
                            <span className="text-red-600">MODU</span>
                        </h1>

                        {/* Açıklama */}
                        <p className="text-muted-foreground text-lg mb-8">
                            Admin paneli şu anda bakım modundadır.
                            Kısa süre içinde tekrar aktif olacaktır.
                        </p>

                        {/* Uyarı Kutusu */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-8"
                        >
                            <div className="flex items-center justify-center gap-2 text-yellow-500">
                                <AlertTriangle className="w-5 h-5" />
                                <span className="font-medium">Site demo olduğu için admin paneli kapalıdır -kelle</span>
                            </div>
                        </motion.div>

                        {/* Ana Sayfa Butonu */}
                        <Link href="/">
                            <Button className="bg-red-600 hover:bg-red-700">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Ana Sayfaya Dön
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        );
    }

    // Bu kısım ADMIN_ENABLED = true olduğunda çalışır
    return null;
}
