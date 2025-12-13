'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Instagram, Youtube, Twitter } from 'lucide-react';
import { socialLinks } from '@/lib/data';

// TikTok Icon Component
function TikTokIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
    );
}

// Linktree Icon Component
function LinktreeIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.92 12l-1.6-1.6L12 5.71l4.68 4.69-1.6 1.6-2.08-2.08V22h-2V9.92L8.92 12zm4.07-9.71L8.31 7l1.6 1.6 2.08-2.08 2.08 2.08L15.68 7l-4.68-4.71z" />
        </svg>
    );
}

const footerLinks = [
    {
        title: 'Mağaza',
        links: [
            { label: 'Tüm Ürünler', href: '/magaza' },
            { label: 'Giyim', href: '/magaza?category=Giyim' },
            { label: 'Aksesuar', href: '/magaza?category=Aksesuar' },
        ],
    },
    {
        title: 'Şirket',
        links: [
            { label: 'Hikayemiz', href: '/hikayemiz' },
            { label: 'İletişim', href: '/iletisim' },
        ],
    },
    {
        title: 'Destek',
        links: [
            { label: 'Sıkça Sorulan Sorular', href: '#' },
            { label: 'Kargo & İade', href: '#' },
            { label: 'Gizlilik Politikası', href: '#' },
        ],
    },
];

const socialIcons = [
    { icon: Instagram, href: socialLinks.instagram, label: 'Instagram' },
    { icon: Youtube, href: socialLinks.youtube, label: 'YouTube' },
    { icon: TikTokIcon, href: socialLinks.tiktok, label: 'TikTok' },
    { icon: Twitter, href: socialLinks.x, label: 'X' },
    { icon: LinktreeIcon, href: socialLinks.linktree, label: 'Linktree' },
];

export default function Footer() {
    return (
        <footer className="bg-card border-t border-border">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="inline-block mb-6">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="text-2xl font-bold tracking-wider"
                            >
                                <span className="text-white">CAVE</span>
                                <span className="text-red-600"> FIGHTWEAR</span>
                            </motion.div>
                        </Link>
                        <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
                            Dövüş sporları tutkunları için tasarlanmış premium ekipman ve giyim. Kalite, dayanıklılık ve stil bir arada.
                        </p>
                        {/* Social Links */}
                        <div className="flex items-center space-x-4">
                            {socialIcons.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-red-600 transition-colors"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Footer Links */}
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h3 className="text-lg font-bold uppercase tracking-wider mb-4">
                                {section.title}
                            </h3>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                        © 2025 Cave Fightwear. Tüm hakları saklıdır.
                    </p>
                    <div className="flex items-center space-x-4 mt-4 md:mt-0">
                        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Kullanım Şartları
                        </Link>
                        <span className="text-muted-foreground">•</span>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Gizlilik
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
