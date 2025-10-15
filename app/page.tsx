import AboutMe from "@/components/sections/AboutMe";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skillset from "@/components/sections/Skillset";

export default function Home() {
  return (
    <div>
      <Hero
        headline="solving problems through"
        highlightedText="design and logic"
        subText="I turn ideas into products people would love to use with  focus on performance and usability. I balance creativity with structure."
        showCTA = {false}
      />
      <AboutMe />
      <Skillset title = "things I know" />
      <Projects />
    </div>
  );
}
