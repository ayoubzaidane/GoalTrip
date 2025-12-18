import type { Metadata } from "next";
import "../styles/globals.css";


import Navbar from "../shared/components/Navbar";
import Footer from "../shared/components/Footer";

export const metadata: Metadata = {
  title: "GoalTrip – Football Tickets & Stays",
  description: "Book stadium tickets and accommodation together for the best football experience.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}



