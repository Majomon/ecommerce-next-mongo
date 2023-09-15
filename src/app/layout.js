import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: "The Burger Store",
  description: "Created by Mauricio Monzon and Sebastian Toranzo © 2023",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
