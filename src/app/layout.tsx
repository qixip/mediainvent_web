import "./globals.css";
import { socialGothic, newOrder } from "@/lib/fonts";

export const metadata = {
  title: "MediaInvent — Start your brand",
  description: "PR & branding studio crafting playful, premium design for bold companies.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      {/* 
        Add the CSS variables to <body> via the className.
        'font-sans' will be mapped to your body font in Step 6.3
      */}
      <body className={`${socialGothic.variable} ${newOrder.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
