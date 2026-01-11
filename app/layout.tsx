import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "[非公式]StarRuptureファンサイト - 計算ツール",
  description: "有志による非公式のStarRupture向け計算ツールです",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">{children}</body>
    </html>
  );
}
