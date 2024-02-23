"use client";
import Header from "@/components/header";
import "./globals.scss";
import { ThemeProvider } from "@/theme";
import Footer from "@/components/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "@/context/userProvider";
import CategoryProvider from "@/context/categoryContext";
import FoodProvider from "@/context/foodContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <UserProvider>
            <CategoryProvider>
              <FoodProvider>
                <Header />
                {children}
                <Footer />
                <ToastContainer />
              </FoodProvider>
            </CategoryProvider>
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
