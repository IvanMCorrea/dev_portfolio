import AboutMe from "./_components/AboutMe";
import Landing from "./_components/Landing";
import Projects from "./_components/Projects";
import { Providers } from "./_components/Providers";
import Technologies from "./_components/Technologies";

export default function Home() {
  return (
    <Providers>
      <main className="flex min-h-screen flex-col items-center m-auto px-12 md:px-24 py-12 max-w-5xl gap-20">
        <Landing />
        <AboutMe />
        <Technologies />
        <Projects />
      </main>
    </Providers>
  );
}
