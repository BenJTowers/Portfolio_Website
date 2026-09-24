import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ben Towers — Software Engineer",
  description: "Portfolio of Ben Towers, a software engineering student focused on backend, data, and systems.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en" className={spaceGrotesk.variable}><body>{children}</body></html>;
}
