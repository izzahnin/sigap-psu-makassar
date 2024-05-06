import type { Metadata } from "next";
// import theme from '@/app/theme';
// import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "SIGAP PSU MAKASSAR",
  description: "Sistem Verifikasi Dokumen PSU Makassar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} >
        {children}
      </body>
    </html>
  );
}