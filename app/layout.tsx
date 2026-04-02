import "./globals.scss";

export const metadata = {
  title: "Secure Login UX Case Study",
  description: "Frontend case study on authentication feedback, usability and security",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}