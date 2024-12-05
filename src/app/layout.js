import "./globals.css";

export const metadata = {
  title: "Pancapan Pandawa",
  description: "Pancapan Pandawa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
