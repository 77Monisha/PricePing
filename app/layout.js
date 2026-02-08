import { Toaster } from "sonner";
import "./globals.css";

export const metadata = {
  title: "PricePing | Real-Time Price Tracking & Alerts",
  description:
    "Track product prices in real time with PricePing. Get instant alerts, view price history, and never miss a price drop again.",
  keywords: [
    "price tracking",
    "price alerts",
    "product price monitor",
    "price history",
    "price drop alerts",
    "online shopping tracker",
    "price monitoring tool",
    "ecommerce price tracker",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
