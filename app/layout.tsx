import "./globals.css";
import { Kanit, Nunito } from "next/font/google";
import { Providers } from "./_components/Providers";
import Sidebar from "./_components/Sidebar";
import AppBar from "./_components/AppBar";

export const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio Ivan Correa",
  description:
    "Welcome to my Full Stack Developer portfolio! I´m Ivan Correa, and I invite you to explore my expertise in web development, front-end design, back-end programming, and database management. Dive into my projects, witness my skills, and experience my passion for creating user-friendly web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${nunito.className} bg-neutral-200 dark:bg-neutral-900`}
      >
        <Providers>
          <Sidebar />
          {children}
          <AppBar />
        </Providers>
      </body>
    </html>
  );
}
