'use client';

import { motion } from 'framer-motion';
import { FileText, ShoppingBag, Truck, RotateCcw, CreditCard, Scale } from 'lucide-react';

export default function KullanimSartlariPage() {
    const sections = [
        {
            icon: FileText,
            title: 'Genel Koşullar',
            content: `Bu web sitesini kullanarak aşağıdaki koşulları kabul etmiş sayılırsınız:
      
• 18 yaşından büyük olduğunuzu veya ebeveyn/vasi izni aldığınızı
• Sağladığınız bilgilerin doğru ve güncel olduğunu
• Hesabınızın güvenliğinden sorumlu olduğunuzu
• Bu koşullara uygun davranacağınızı

Cave Fightwear, bu koşulları önceden haber vermeksizin değiştirme hakkını saklı tutar.`,
        },
        {
            icon: ShoppingBag,
            title: 'Sipariş ve Satın Alma',
            content: `Sipariş verirken aşağıdaki koşullar geçerlidir:
      
• Tüm fiyatlar Türk Lirası (TL) cinsindendir ve KDV dahildir
• Ürün fiyatları ve stok durumu değişiklik gösterebilir
• Sipariş onayı, ödemenin başarıyla tamamlanmasına bağlıdır
• Her siparişte fatura düzenlenir ve e-posta ile gönderilir
• Cave Fightwear, siparişi iptal etme veya reddetme hakkını saklı tutar`,
        },
        {
            icon: Truck,
            title: 'Kargo ve Teslimat',
            content: `Teslimat süreçleri hakkında bilgiler:
      
• Siparişler 1-3 iş günü içinde kargoya verilir
• Standart teslimat süresi 2-5 iş günüdür
• 500 TL ve üzeri siparişlerde kargo ücretsizdir
• Teslimat adresi değişikliği sipariş kargoya verilmeden önce yapılmalıdır
• Hasarlı veya eksik teslimat durumunda 24 saat içinde bildirim yapılmalıdır`,
        },
        {
            icon: RotateCcw,
            title: 'İade ve Değişim',
            content: `İade politikamız aşağıdaki şekildedir:
      
• Ürünler teslim tarihinden itibaren 14 gün içinde iade edilebilir
• İade edilecek ürünler kullanılmamış ve orijinal ambalajında olmalıdır
• Hijyen ürünleri (ağızlık vb.) sağlık nedeniyle iade edilemez
• İade onayı sonrası 7 iş günü içinde ücret iadesi yapılır
• Değişim talepleri stok durumuna göre değerlendirilir`,
        },
        {
            icon: CreditCard,
            title: 'Ödeme Koşulları',
            content: `Ödeme yöntemleri ve güvenlik:
      
• Kredi kartı, banka kartı ve havale/EFT ile ödeme yapılabilir
• Tüm ödemeler SSL ile şifrelenir
• 3D Secure ile güvenli ödeme imkanı
• Taksit seçenekleri kart tipine göre değişir
• Fatura bilgileri ile kart sahibi bilgileri eşleşmelidir`,
        },
        {
            icon: Scale,
            title: 'Fikri Mülkiyet',
            content: `Telif ve marka hakları:
      
• Cave Fightwear logosu ve markası tescillidir
• Site içeriği (metinler, görseller, tasarım) telif hakkı ile korunmaktadır
• İçeriklerin izinsiz kopyalanması veya kullanılması yasaktır
• Sosyal medyada paylaşım için izin alınmalıdır
• İhlal durumunda yasal işlem başlatılacaktır

Uyuşmazlık durumunda İstanbul Mahkemeleri ve İcra Daireleri yetkilidir.`,
        },
    ];

    return (
        <div className="min-h-screen pt-24 pb-16">
            {/* Hero Section */}
            <section className="relative py-16 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 via-transparent to-transparent" />

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            KULLANIM{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                                ŞARTLARI
                            </span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Cave Fightwear hizmetlerini kullanmadan önce lütfen bu koşulları
                            dikkatli bir şekilde okuyun.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-8">
                        {sections.map((section, index) => (
                            <motion.div
                                key={section.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center flex-shrink-0">
                                        <section.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                                        <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                                            {section.content}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Agreement Note */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto mt-12 p-6 bg-red-500/10 border border-red-500/20 rounded-xl"
                    >
                        <p className="text-center text-muted-foreground">
                            <strong className="text-white">Önemli:</strong> Bu web sitesini kullanarak,
                            yukarıdaki tüm koşulları okuduğunuzu, anladığınızı ve kabul ettiğinizi beyan etmiş olursunuz.
                        </p>
                    </motion.div>

                    {/* Last Update */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mt-8 text-muted-foreground"
                    >
                        <p>Son güncelleme: Aralık 2024</p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
