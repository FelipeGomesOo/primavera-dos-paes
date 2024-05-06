import "@/app/globals.css";
import { Courier_Prime, Poppins } from "next/font/google";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getGeral, getHomePage } from "@/lib/data";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import { GoogleTagManager } from "@next/third-parties/google";
export const runtime = "nodejs";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});
const courier = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-courier-prime",
});

export async function generateMetadata(): Promise<Metadata> {
  const { seoDescription, seoTitle, ogImage } = await getHomePage();
  return {
    title: {
      template: `%s | ${seoTitle}`,
      default: seoTitle,
    },
    description: seoDescription,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL("https://primaveradospaes.com.br"),
    alternates: {
      canonical: "/",
    },
    openGraph: {
      url: "https://primaveradospaes.com.br",
      siteName: "Primavera dos Pães",
      images: [
        {
          url: `/opengraph-image.jpg`,
          width: ogImage.width || 1200,
          height: ogImage.height || 630,
        },
      ],
      locale: "pt_BR",
      type: "website",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { tm_id, tm_status } = await getGeral();
  return (
    <html
      lang="pt-br"
      className={`min-h-full ${courier.variable} ${poppins.variable} `}
    >
      {tm_status && <GoogleTagManager gtmId={tm_id} />}
      <body className="flex flex-col min-h-svh">
        <FloatingWhatsapp />
        <Header className="flex-none" />
        <main className="grow">{children}</main>
        <Footer className="flex-none" />
      </body>
    </html>
  );
}
