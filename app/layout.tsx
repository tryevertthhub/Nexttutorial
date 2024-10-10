import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <head>
        <meta name="zoom-domain-verification" content="ZOOM_verify_a4e3e9ce3c3c4b9ab0c1574abdf3bfc5" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
