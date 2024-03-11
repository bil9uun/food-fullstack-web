import ThemeProvider from "@/theme";
import "./globals.css";
import CategoryProvider from "@/context/categoryContext";
import FoodProvider from "@/context/foodContext";
import OrderProvider from "@/context/orderContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <CategoryProvider>
            <OrderProvider>
              <FoodProvider>{children}</FoodProvider>
            </OrderProvider>
          </CategoryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
