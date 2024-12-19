import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Rachel's Portfolio",
  description: 'Personal portfolio website showcasing my work and journey',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}