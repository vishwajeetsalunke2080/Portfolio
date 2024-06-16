import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "./Components/layout";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vishwajeet Salunke",
  description: "Vishwajeet Salunke Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}><Layout><Analytics/>{children}</Layout></body>
    </html>
  );
}
