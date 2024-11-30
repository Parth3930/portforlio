import "./globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head><meta name="google-site-verification" content="dz3x41Ls0YG91PBi3TfH7MciacoIrQKUkuWV6muAOMw" /></head>
      <body>{children}</body>
    </html>
  );
}
