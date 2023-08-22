import "./globals.css";

export default function RootLayout({children}) {
  return (
    <html Lang="en">
      <body>{children}</body>
    </html>
  )
}