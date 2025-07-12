import {
  Geist,
  Geist_Mono,
  Poppins,
  Rajdhani,
  Manrope,
  Montserrat,
} from "next/font/google";
import "./globals.css";
import { icons } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// const poppins = Poppins({
//   variable: "--font-poppins",
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   subsets: ["latin"],
// });

// const rajdhani = Rajdhani({
//   variable: "--font-rajdhani",
//   weight: ["300", "400", "500", "600", "700"],
//   subsets: ["latin"],
// });

// const manrope = Manrope({
//   variable: "--font-manrope",
//   weight: ["200", "300", "400", "500", "600", "700", "800"],
//   subsets: ["latin"],
// });

// const montserrat = Montserrat({
//   variable: "--font-montserrat",
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Karaikudi Runners",
  description:
    "Official website of Karaikudi Runners Club, based in Karaikudi, Tamil Nadu.",
  icons: {
    icon: "/favicon-rounded.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
