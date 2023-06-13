import AboutMe from "./_components/AboutMe";
import Experience from "./_components/Experience";
import Landing from "./_components/Landing";
import Projects from "./_components/Projects";
import Technologies from "./_components/Technologies";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center m-auto px-12 md:px-24 py-12 max-w-5xl md:gap-20"
      id="home"
    >
      <Landing />
      <AboutMe />
      <Experience />
      <Technologies />
      <Projects />
    </main>
  );
}
