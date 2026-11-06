import Header from "@/components/shared/Header";
import "./globals.css";
import { Poppins, Montserrat } from "next/font/google";
import Footer from "@/components/shared/Footer";
import ScrollProgress from "@/components/shared/ScrollProgress";
import ScrollToTop from "@/components/shared/ScrollToTop";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${montserrat.variable} font-sans bg-background-color-2`}
      >
        <ScrollProgress />
        <header>
          <Header />
        </header>

        <main>{children}</main>

        <footer className="main-container py-8 md:py-12 lg:py-20 border-t border-black">
          <Footer />
        </footer>

        <ScrollToTop />
      </body>
    </html>
  );
}
