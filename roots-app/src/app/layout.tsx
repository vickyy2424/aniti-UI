import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "ROOTS — Indian Heritage Craft",
  description:
    "Discover the stories, craftsmanship and traditions behind the objects that shaped Indian everyday life. Copper, brass and bronze vessels made for today.",
  keywords: "Indian heritage, copper vessels, brass thali, bronze cookware, traditional craft",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
