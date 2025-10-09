import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: "Giovanni Sugamiele - Portfolio",
  description: "Sviluppatore Web | React & Laravel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <Analytics/>
      <body>{children}</body>
    </html>
  );
}
