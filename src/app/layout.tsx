import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KernUI",
  description: "KernUI - The UI Kit Your Product Deserves",
  keywords: [
    "UI Kit",
    "Design System",
    "React Components",
    "Tailwind CSS",
    "Web Development",
  ],
  authors: [{ name: "KernUI Team" }],
  creator: "KernUI",
  publisher: "KernUI",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kernui.com",
    siteName: "KernUI",
    title: "KernUI - The UI Kit Your Product Deserves",
    description: "KernUI - The UI Kit Your Product Deserves",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KernUI - The UI Kit Your Product Deserves",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@kernui",
    creator: "@kernui",
    title: "KernUI - The UI Kit Your Product Deserves",
    description: "KernUI - The UI Kit Your Product Deserves",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  manifest: "/manifest.json",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={`${inter.variable} antialiased overflow-x-hidden`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
