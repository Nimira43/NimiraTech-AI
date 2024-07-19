import type { Metadata } from "next"
import "./globals.css"
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Next Expense",
  description: "Expense Tracker",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Header />
          <main className="container">
            {children}          
          </main>  
        </body>
      </html>
    </ClerkProvider> 
  )
}
