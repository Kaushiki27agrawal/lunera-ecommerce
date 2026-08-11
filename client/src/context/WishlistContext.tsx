import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

interface WishlistContextType {
  wishlistItems: string[];
  addToWishlist: (productId: string) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  clearWishlist: () => void;
  getWishlistCount: () => number;
}

const WishlistContext = createContext<
  WishlistContextType | undefined
>(undefined);

interface WishlistProviderProps {
  children: ReactNode;
}

export function WishlistProvider({
  children,
}: WishlistProviderProps) {
  const [wishlistItems, setWishlistItems] = useState<string[]>(
    () => {
      const savedWishlist =
        localStorage.getItem("lunera-wishlist");

      return savedWishlist
        ? JSON.parse(savedWishlist)
        : [];
    }
  );

  useEffect(() => {
    localStorage.setItem(
      "lunera-wishlist",
      JSON.stringify(wishlistItems)
    );
  }, [wishlistItems]);

  const addToWishlist = (productId: string) => {
    setWishlistItems((currentItems) => {
      if (currentItems.includes(productId)) {
        return currentItems;
      }

      return [...currentItems, productId];
    });
  };

  const removeFromWishlist = (productId: string) => {
    setWishlistItems((currentItems) =>
      currentItems.filter((id) => id !== productId)
    );
  };

  const isInWishlist = (productId: string) => {
    return wishlistItems.includes(productId);
  };

  const clearWishlist = () => {
    setWishlistItems([]);
  };

  const getWishlistCount = () => {
    return wishlistItems.length;
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        clearWishlist,
        getWishlistCount,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error(
      "useWishlist must be used inside WishlistProvider"
    );
  }

  return context;
}