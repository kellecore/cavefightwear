'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, Mail, RefreshCw } from 'lucide-react';

export default function GizlilikPage() {
    const sections = [
        {
            icon: Database,
            title: 'Toplanan Bilgiler',
            content: `Cave Fightwear olarak, size daha iyi hizmet verebilmek için aşağıdaki bilgileri topluyoruz:
      
• Ad, soyad ve iletişim bilgileri
• Teslimat ve fatura adresi
• E-posta adresi ve telefon numarası
• Sipariş geçmişi ve tercihleriniz
• Ödeme bilgileri (güvenli ödeme altyapısı üzerinden)`,
        },
        {
            icon: Shield,
            title: 'Bilgi Güvenliği',
            content: `Kişisel bilgilerinizin güvenliği bizim için son derece önemlidir:
      
• SSL şifreleme ile korunan güvenli bağlantı
• PCI-DSS uyumlu ödeme altyapısı
• Düzenli güvenlik denetimleri
• Yetkisiz erişime karşı koruma sistemleri`,
        },
        {
            icon: Eye,
            title: 'Bilgi Kullanımı',
            content: `Topladığımız bilgileri şu amaçlarla kullanıyoruz:
      
• Siparişlerinizi işlemek ve teslim etmek
• Müşteri hizmetleri desteği sağlamak
• Kampanya ve yeni ürünler hakkında bilgilendirme (izninizle)
• Web sitemizi geliştirmek ve kişiselleştirmek`,
        },
        {
            icon: Lock,
            title: 'Üçüncü Taraflarla Paylaşım',
            content: `Bilgileriniz aşağıdaki durumlar dışında üçüncü taraflarla paylaşılmaz:
      
• Kargo şirketleri (teslimat için gerekli bilgiler)
• Ödeme hizmet sağlayıcıları
• Yasal zorunluluklar gerektirdiğinde
• Açık izniniz olduğunda`,
        },
        {
            icon: RefreshCw,
            title: 'Çerezler (Cookies)',
            content: `Web sitemizde kullanıcı deneyimini iyileştirmek için çerezler kullanıyoruz:
      
• Oturum çerezleri (sepet bilgileri vb.)
• Tercih çerezleri (dil, tema ayarları)
• Analitik çerezler (site kullanım istatistikleri)
• Tarayıcı ayarlarınızdan çerezleri kontrol edebilirsiniz`,
        },
        {
            icon: Mail,
            title: 'İletişim ve Haklarınız',
            content: `KVKK kapsamında aşağıdaki haklara sahipsiniz:
      
• Kişisel verilerinize erişim hakkı
• Verilerin düzeltilmesini talep etme hakkı
• Verilerin silinmesini talep etme hakkı
• Veri işlemeye itiraz etme hakkı

İletişim: info@cavefightwear.com`,
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
                            GİZLİLİK{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                                POLİTİKASI
                            </span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Cave Fightwear olarak gizliliğinize önem veriyoruz. Bu sayfa, kişisel
                            bilgilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklar.
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

                    {/* Last Update */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mt-12 text-muted-foreground"
                    >
                        <p>Son güncelleme: Aralık 2025</p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
