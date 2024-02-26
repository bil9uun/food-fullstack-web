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
import BasketProvider from "@/context/basketContext";

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
            <BasketProvider>
              <CategoryProvider>
                <FoodProvider>
                  <Header />
                  {children}
                  <Footer />
                  <ToastContainer />
                </FoodProvider>
              </CategoryProvider>
            </BasketProvider>
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
