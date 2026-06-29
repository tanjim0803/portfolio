import Header from "@/components/shared/Header";
import "./globals.css";
import { Poppins, Montserrat } from "next/font/google";
import Footer from "@/components/shared/Footer";

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
    <html lang="en">
      <body
        className={`${poppins.variable} ${montserrat.variable} font-sans bg-background-color-2`}
      >
        <header>
          <Header />
        </header>
        <main className="max-w-7xl mx-auto pt-20 px-4 md:-6 lg:px-12">
          {children}
        </main>

        <footer className="max-w-7xl mx-auto py-20 px-4 md:-6 lg:px-12 border-t border-black">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
