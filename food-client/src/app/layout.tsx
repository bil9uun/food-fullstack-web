"use client";
import Header from "@/components/header";
import "./globals.scss";
import { ThemeProvider } from "@/theme";
import Footer from "@/components/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
          <ToastContainer />
        </ThemeProvider>
      </body>
    </html>
  );
}
