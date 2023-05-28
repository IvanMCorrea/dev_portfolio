import "./globals.css";
import { Kanit, Nunito } from "next/font/google";
import { Providers } from "./_components/Providers";

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
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${nunito.className} bg-neutral-200 dark:bg-neutral-900`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
