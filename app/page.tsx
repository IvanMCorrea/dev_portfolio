import AboutMe from "./_components/AboutMe";
import Landing from "./_components/Landing";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center m-auto px-12 md:px-24 py-12 max-w-5xl gap-20">
      <Landing />
      <AboutMe />
    </main>
  );
}
