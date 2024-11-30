import "./globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head><meta name="google-site-verification" content="v3Iw5zKTvl4nmqMkG_re_zltWnSWFgLey9wODp6ZwVU" /></head>
      <body>{children}</body>
    </html>
  );
}
