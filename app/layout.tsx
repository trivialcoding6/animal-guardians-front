import type { Metadata } from "next";
import "./globals.css";
import ReactQueryProviders from "@/components/providers/ReactQueryProviders";

export const metadata: Metadata = {
  title: "반려견 피부질환 판별 서비스",
  description: "반려견 피부질환 판별 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProviders>{children}</ReactQueryProviders>
      </body>
    </html>
  );
}
