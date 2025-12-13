import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from './data';

// Cart Item Type
export interface CartItem {
    product: Product;
    size: string;
    quantity: number;
}

// Cart Store Interface
interface CartStore {
    items: CartItem[];
    isOpen: boolean;
    addItem: (product: Product, size: string) => void;
    removeItem: (productId: string, size: string) => void;
    updateQuantity: (productId: string, size: string, quantity: number) => void;
    clearCart: () => void;
    openCart: () => void;
    closeCart: () => void;
    toggleCart: () => void;
    getTotalItems: () => number;
    getTotalPrice: () => number;
}

// Cart Store with Persistence
export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],
            isOpen: false,

            addItem: (product: Product, size: string) => {
                const items = get().items;
                const existingItem = items.find(
                    (item) => item.product.id === product.id && item.size === size
                );

                if (existingItem) {
                    set({
                        items: items.map((item) =>
                            item.product.id === product.id && item.size === size
                                ? { ...item, quantity: item.quantity + 1 }
                                : item
                        ),
                    });
                } else {
                    set({ items: [...items, { product, size, quantity: 1 }] });
                }
                set({ isOpen: true });
            },

            removeItem: (productId: string, size: string) => {
                set({
                    items: get().items.filter(
                        (item) => !(item.product.id === productId && item.size === size)
                    ),
                });
            },

            updateQuantity: (productId: string, size: string, quantity: number) => {
                if (quantity <= 0) {
                    get().removeItem(productId, size);
                    return;
                }
                set({
                    items: get().items.map((item) =>
                        item.product.id === productId && item.size === size
                            ? { ...item, quantity }
                            : item
                    ),
                });
            },

            clearCart: () => set({ items: [] }),

            openCart: () => set({ isOpen: true }),

            closeCart: () => set({ isOpen: false }),

            toggleCart: () => set({ isOpen: !get().isOpen }),

            getTotalItems: () => {
                return get().items.reduce((total, item) => total + item.quantity, 0);
            },

            getTotalPrice: () => {
                return get().items.reduce(
                    (total, item) => total + item.product.price * item.quantity,
                    0
                );
            },
        }),
        {
            name: 'cave-cart-storage',
        }
    )
);
