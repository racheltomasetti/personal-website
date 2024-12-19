import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Rachel Tomasetti",
  description: 'Personal website showcasing me',
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