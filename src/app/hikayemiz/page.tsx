'use client';

import { motion } from 'framer-motion';
import { Target, Shield, Award, Users } from 'lucide-react';

const values = [
    {
        icon: Target,
        title: 'Hedef Odaklı',
        description: 'Her ürünümüz savaşçıların ihtiyaçlarına göre tasarlanır.',
    },
    {
        icon: Shield,
        title: 'Kalite Öncelikli',
        description: 'Premium malzemeler ve dayanıklı üretim standartları.',
    },
    {
        icon: Award,
        title: 'Şampiyonların Tercihi',
        description: 'Profesyonel dövüşçüler tarafından test edildi ve onaylandı.',
    },
    {
        icon: Users,
        title: 'Topluluk',
        description: 'Dünya çapında binlerce savaşçıdan oluşan bir aile.',
    },
];

const timeline = [
    {
        year: '2025',
        title: 'Başlangıç',
        description: 'Cave Fightwear, dövüş sporlarına olan tutkudan doğdu.',
    },
    {
        year: '2025',
        title: 'İlk Koleksiyon',
        description: 'Premium rashguard ve aksesuar serimizi piyasaya sürdük.',
    },
    {
        year: '2025',
        title: 'Büyüme',
        description: 'Türkiye genelinde 1000+ savaşçıya ulaştık.',
    },
    {
        year: '2025',
        title: 'Genişleme',
        description: 'Ürün yelpazemizi genişlettik ve uluslararası pazara açıldık.',
    },
    {
        year: '2025',
        title: 'Bugün',
        description: 'Cave ailesi olarak büyümeye devam ediyoruz.',
    },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-32 overflow-hidden">
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
                <motion.div
                    className="absolute inset-0 opacity-30"
                    animate={{
                        background: [
                            'radial-gradient(circle at 20% 30%, #dc2626 0%, transparent 50%)',
                            'radial-gradient(circle at 80% 70%, #dc2626 0%, transparent 50%)',
                            'radial-gradient(circle at 20% 30%, #dc2626 0%, transparent 50%)',
                        ],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />

                <div className="relative container mx-auto px-4 text-center z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                            <span className="text-white">HİKAYEMİZ</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                            Cave Fightwear, dövüş sporlarına olan sonsuz tutkudan doğdu.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-24 bg-card relative overflow-hidden">
                {/* Subtle gradient accent */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 via-transparent to-purple-600/5" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-red-500 font-bold text-lg tracking-wider mb-4 block">
                                CAVE FELSEFESİ
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                MAĞARADA
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">DÖVÜŞÇÜ</span>
                                <br />
                                DOĞAR
                            </h2>
                            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    Her şampiyon karanlıkta başlar. Mağaranın derinliklerinde, ter, kan ve
                                    azimle yoğrulur. &quot;Cave&quot; kelimesi sadece bir isim değil, bir felsefedir.
                                </p>
                                <p>
                                    Antik çağlarda savaşçılar mağaralarda antrenman yapardı. Dışarıdaki
                                    dünyanın gürültüsünden uzak, sadece kendileriyle ve sanatlarıyla baş başa.
                                </p>
                                <p>
                                    Cave Fightwear olarak bu ruhu yaşatıyoruz. Her ürünümüz, savaşçının
                                    içindeki gücü ortaya çıkarmak için tasarlandı.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-square rounded-2xl overflow-hidden"
                        >
                            {/* Gradient box instead of image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-gray-900 to-purple-900/20" />
                            <div
                                className="absolute inset-0 opacity-[0.05]"
                                style={{
                                    backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                  `,
                                    backgroundSize: '30px 30px',
                                }}
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                    className="text-8xl font-bold text-white/10"
                                >
                                    CAVE
                                </motion.div>
                            </div>
                            <div className="absolute inset-4 border border-white/10 rounded-xl" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-card" />

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            DEĞERLERİMİZ
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Bizi farklı kılan ilkelerimiz.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center p-8 bg-card rounded-xl border border-border hover:border-red-600/50 transition-all duration-300 group"
                            >
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-600/20 to-orange-600/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                    <value.icon className="w-8 h-8 text-red-500" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 uppercase tracking-wider">
                                    {value.title}
                                </h3>
                                <p className="text-muted-foreground">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-24 bg-card relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 via-transparent to-red-600/5" />

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            YOLCULUĞUMUZ
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Cave Fightwear&apos;ın hikayesi.
                        </p>
                    </motion.div>

                    <div className="max-w-3xl mx-auto">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex gap-8 mb-8 last:mb-0"
                            >
                                <div className="flex-shrink-0 w-20">
                                    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">{item.year}</span>
                                </div>
                                <div className="relative pl-8 border-l-2 border-border pb-8 last:pb-0">
                                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-red-600 to-orange-600" />
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-muted-foreground">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Manifesto Section */}
            <section className="py-32 relative overflow-hidden">
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
                <motion.div
                    className="absolute inset-0 opacity-40"
                    animate={{
                        background: [
                            'radial-gradient(circle at 0% 50%, #dc2626 0%, transparent 40%)',
                            'radial-gradient(circle at 100% 50%, #dc2626 0%, transparent 40%)',
                            'radial-gradient(circle at 0% 50%, #dc2626 0%, transparent 40%)',
                        ],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                />

                <div className="relative container mx-auto px-4 z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl"
                    >
                        <span className="text-red-500 font-bold text-lg tracking-wider mb-4 block">
                            MANİFESTO
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                            BİZ SAVAŞÇIYIZ
                        </h2>
                        <div className="space-y-6 text-xl leading-relaxed">
                            <p className="text-muted-foreground">
                                Hayat bir arena, biz savaşçılarız.
                            </p>
                            <p className="text-muted-foreground">
                                Düşmek yenilmek değil, kalkma cesareti göstermektir. Her gün daha güçlü,
                                her antrenman daha kararlı. Hedeflerimize ter ve azimle ulaşırız.
                            </p>
                            <motion.p
                                className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-500 text-3xl"
                                animate={{
                                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                                }}
                                style={{
                                    backgroundSize: '200% auto',
                                }}
                                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                &quot;Mağaradan çıkan, zirveye yürür.&quot;
                            </motion.p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
