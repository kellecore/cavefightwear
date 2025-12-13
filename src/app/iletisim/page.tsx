'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Instagram, Youtube, Twitter, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { socialLinks } from '@/lib/data';

// TikTok Icon Component
function TikTokIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
    );
}

const contactInfo = [
    {
        icon: MapPin,
        title: 'Adres',
        content: 'İstanbul, Türkiye',
    },
    {
        icon: Phone,
        title: 'Telefon',
        content: '+90 (212) 555 00 00',
    },
    {
        icon: Mail,
        title: 'E-posta',
        content: 'info@cavefightwear.com',
    },
];

const socialIcons = [
    { icon: Instagram, href: socialLinks.instagram, label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: Youtube, href: socialLinks.youtube, label: 'YouTube', color: 'hover:bg-red-600' },
    { icon: TikTokIcon, href: socialLinks.tiktok, label: 'TikTok', color: 'hover:bg-black' },
    { icon: Twitter, href: socialLinks.x, label: 'X', color: 'hover:bg-blue-500' },
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });

        setTimeout(() => setIsSubmitted(false), 5000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen py-12">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-white">İLETİŞİM</span>
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Sorularınız için bize ulaşın. Size en kısa sürede dönüş yapacağız.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <Card className="bg-card border-border">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-bold mb-6">Bize Yazın</h2>

                                {isSubmitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-12"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-green-600/20 flex items-center justify-center mx-auto mb-4">
                                            <CheckCircle className="w-8 h-8 text-green-600" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">Mesajınız Gönderildi!</h3>
                                        <p className="text-muted-foreground">
                                            En kısa sürede size dönüş yapacağız.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium mb-2">Ad Soyad</label>
                                                <Input
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="Adınız"
                                                    required
                                                    className="h-12"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-2">E-posta</label>
                                                <Input
                                                    name="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="ornek@email.com"
                                                    required
                                                    className="h-12"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium mb-2">Konu</label>
                                            <Input
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                placeholder="Mesajınızın konusu"
                                                required
                                                className="h-12"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium mb-2">Mesaj</label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Mesajınızı buraya yazın..."
                                                required
                                                rows={5}
                                                className="w-full px-4 py-3 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full h-12 text-lg font-bold uppercase tracking-wider bg-red-600 hover:bg-red-700"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                                />
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5 mr-2" />
                                                    Gönder
                                                </>
                                            )}
                                        </Button>
                                    </form>
                                )}
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        {/* Contact Cards */}
                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={info.title}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                >
                                    <Card className="bg-card border-border hover:border-red-600/50 transition-colors">
                                        <CardContent className="p-6 flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-red-600/10 flex items-center justify-center flex-shrink-0">
                                                <info.icon className="w-6 h-6 text-red-600" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold uppercase tracking-wider text-sm text-muted-foreground">
                                                    {info.title}
                                                </h3>
                                                <p className="text-lg">{info.content}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>

                        {/* Social Media */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <Card className="bg-card border-border">
                                <CardContent className="p-6">
                                    <h3 className="font-bold uppercase tracking-wider mb-4">Sosyal Medya</h3>
                                    <p className="text-muted-foreground mb-6">
                                        Bizi sosyal medyada takip edin, yenilikleri kaçırmayın.
                                    </p>
                                    <div className="flex flex-wrap gap-4">
                                        {socialIcons.map((social) => (
                                            <motion.a
                                                key={social.label}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.1, y: -2 }}
                                                whileTap={{ scale: 0.95 }}
                                                className={`w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-white ${social.color} transition-colors`}
                                                aria-label={social.label}
                                            >
                                                <social.icon className="w-5 h-5" />
                                            </motion.a>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Working Hours */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                        >
                            <Card className="bg-card border-border">
                                <CardContent className="p-6">
                                    <h3 className="font-bold uppercase tracking-wider mb-4">Çalışma Saatleri</h3>
                                    <div className="space-y-2 text-muted-foreground">
                                        <div className="flex justify-between">
                                            <span>Pazartesi - Cuma</span>
                                            <span className="font-medium text-foreground">09:00 - 18:00</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Cumartesi</span>
                                            <span className="font-medium text-foreground">10:00 - 16:00</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Pazar</span>
                                            <span className="font-medium text-red-600">Kapalı</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
