import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Youtube Study Kit",
  description: "Revolutionary Video Tagging Tool",
  icons:{
    icon:["/logo.png?v=1"],
    apple:["/logo.png?v=3"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="google-site-verification" content="ZK_5g5AWJmh1Kv-hsH5uWI-hZnGZYg-GmM3MjIuRHzU" />
        <link rel="icon" href={metadata.icons.icon[0]} />
        <link rel="apple-touch-icon" href={metadata.icons.apple[0]} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
