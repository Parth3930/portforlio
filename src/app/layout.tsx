import "./globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="dz3x41Ls0YG91PBi3TfH7MciacoIrQKUkuWV6muAOMw" />
        <meta name="description" content="Welcome to my portfolio showcasing my projects, skills, and journey as a developer." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Parth Sharma's Portfolio</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
