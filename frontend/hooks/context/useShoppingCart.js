// Importa la función 'create' de la biblioteca 'zustand' para crear un estado global.
import { create } from "zustand";

// Importa la función 'persist' de 'zustand/middleware' para habilitar la persistencia del estado.
import { persist } from "zustand/middleware";

// Importa 'uuid' para generar identificadores únicos para cada ítem en el carrito.
import { v4 as uuidv4 } from "uuid";

// Crea un hook personalizado llamado 'useShoppingCart' usando 'create' de Zustand.
export const useShoppingCart = create(
  persist(
    (set) => ({
      // Estado inicial: un array vacío para los ítems del carrito.
      cartItems: [],

      // Función para añadir productos al carrito.
      addToCart: (product) =>
        set((state) => {
          // Genera un identificador único para cada producto añadido al carrito.
          const newItem = { ...product, cartId: uuidv4() };

          // Añade el nuevo producto al array de productos en el carrito.
          return { cartItems: [...state.cartItems, newItem] };
        }),

      // Función para eliminar un producto específico del carrito.
      removeFromCart: (cartId) =>
        set((state) => {
          // Filtra el array de cartItems para eliminar el producto con el cartId específico.
          return {
            cartItems: state.cartItems.filter((item) => item.cartId !== cartId),
          };
        }),

      // Función para vaciar el carrito
      clearCart: () =>
        set(() => ({
          cartItems: [],
        })),

      // Función que calcula el número total de ítems en el carrito.
      itemCount: (state) => state.cartItems.length,
    }),
    {
      // Configuración de persistencia para guardar el estado en el almacenamiento local.
      name: "shopping-cart-storage",
    }
  )
);
