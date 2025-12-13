// Product and Category Types
export type Category = 'Aksesuar' | 'Giyim';

export interface Product {
    id: string;
    slug: string;
    name: string;
    price: number;
    category: Category;
    image: string;
    hoverImage?: string;
    description: string;
    sizes: string[];
    featured: boolean;
}

// Product Data
export const products: Product[] = [
    {
        id: '1',
        slug: 'cave-maske',
        name: 'Cave Maske',
        price: 450,
        category: 'Aksesuar',
        image: '/cave-maske.png',
        hoverImage: '/cave-maske2.jpg',
        description: 'Profesyonel dövüş sporları için tasarlanmış premium Cave Maske. Yüksek kaliteli malzeme ve ergonomik tasarım ile maksimum koruma sağlar. Antrenman ve müsabakalar için idealdir.',
        sizes: ['S', 'M', 'L', 'XL'],
        featured: true,
    },
    {
        id: '2',
        slug: 'cave-rashguard',
        name: 'Cave Rashguard',
        price: 850,
        category: 'Giyim',
        image: '/cave-shirt.png',
        description: 'Yüksek performanslı Cave Rashguard. Nefes alabilir kumaş teknolojisi ile ter yönetimi sağlar. Sıkı ama rahat kesim ile maksimum hareket özgürlüğü. MMA, BJJ ve güreş için mükemmel.',
        sizes: ['S', 'M', 'L', 'XL'],
        featured: true,
    },
];

// Helper Functions
export function getProductBySlug(slug: string): Product | undefined {
    return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(category: Category): Product[] {
    return products.filter((product) => product.category === category);
}

export function getFeaturedProducts(): Product[] {
    return products.filter((product) => product.featured);
}

export function getAllCategories(): Category[] {
    return ['Aksesuar', 'Giyim'];
}

// Social Media Links
export const socialLinks = {
    instagram: 'https://www.instagram.com/cavefw',
    youtube: 'https://www.youtube.com/@cavefightwear',
    tiktok: 'https://www.tiktok.com/@cavefightwear',
    x: 'https://x.com/cavefw',
    linktree: 'https://t.co/yK8k624DPe',
};

// Admin Analytics (Pseudo Data)
export const adminAnalytics = {
    totalRevenue: 24500,
    totalOrders: 47,
    totalProducts: 2,
    totalCustomers: 38,
    recentOrders: [
        { id: 'ORD-001', customer: 'Ahmet Y.', product: 'Cave Maske', amount: 450, date: '2025-01-15' },
        { id: 'ORD-002', customer: 'Mehmet K.', product: 'Cave Rashguard', amount: 850, date: '2025-01-14' },
        { id: 'ORD-003', customer: 'Ali B.', product: 'Cave Maske', amount: 450, date: '2025-01-13' },
        { id: 'ORD-004', customer: 'Fatma S.', product: 'Cave Rashguard', amount: 850, date: '2025-01-12' },
        { id: 'ORD-005', customer: 'Zeynep A.', product: 'Cave Maske', amount: 450, date: '2025-01-11' },
    ],
};
