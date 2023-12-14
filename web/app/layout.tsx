import type { Metadata } from "next";
import "@/styles/globals.scss";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head></head>
      <body>{children}</body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Collaborative Content Management System - Heart",
  icons: [
    {
      url: "/heartcms-static-favicon-vector.svg",
      sizes: "64x64",
      type: "image/svg",
    },
  ],
};

export default RootLayout;
