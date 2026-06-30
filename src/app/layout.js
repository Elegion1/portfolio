import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: "Giovanni Sugamiele | Web Developer",
  description: "Sviluppatore Web | PHP, Laravel, JavaScript",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <Analytics/>
      <body>{children}</body>
    </html>
  );
}
