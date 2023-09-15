import axios from "axios";
import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";

axios.defaults.baseURL = "http://localhost:3001";

export const metadata = {
  title: "The Burger Store",
  description: "Created by Mauricio Monzon and Sebastian Toranzo © 2023",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-10">{children}</main>
      </body>
    </html>
  );
}
