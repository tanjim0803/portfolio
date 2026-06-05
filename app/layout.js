import Header from "@/components/shared/Header";
import "./globals.css";
import { Poppins, Montserrat } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${montserrat.className} bg-background-color-2`}
      >
        <header>
          <Header />
        </header>
        <main className="max-w-7xl mx-auto pt-20 px-4 md:-6 lg:px-12">
          {children}
        </main>

        <footer></footer>
      </body>
    </html>
  );
}
