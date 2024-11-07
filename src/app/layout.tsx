import type { Metadata } from "next";
import { Poppins, Fira_Sans } from "next/font/google";
import "./globals.css";
import "../../public/assets/css/responsive.css";
import "../../public/assets/css/theme-default.css";
import "../../public/assets/css/magnific-popup.css";
// import "../../public/assets/css/owl.carousel.min.css";
import "../../public/assets/css/owl.transitions.css";
import "../../public/assets/css/style.css";
import "../../public/assets/css/bootstrap-icons.css";

// import "../../public/assets/css/flaticon.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"]
});

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"]
});

export const metadata: Metadata = {
  title: "Prime Logic Solutions",
  description: "Your next generation Business Solutions",
  icons: {
    icon: "/assets/images/fav-icon/ico.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${firaSans.className}`}>{children}</body>
    </html>
  );
}
