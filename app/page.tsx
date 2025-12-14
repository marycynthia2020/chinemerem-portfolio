import AboutMe from "@/components/sections/AboutMe";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skillset from "@/components/sections/Skillset";
import SkillTicker from "@/components/sections/SkillTicker";
import TouchBtn from "@/components/TouchBtn";

export default function Home() {
  return (
    <div>
      <Hero
        headline="solving problems through"
        highlightedText="design and logic"
        subText="I turn ideas into products people would love to use with  focus on performance and usability. I balance creativity with structure."
        showCTA={false}
      />
      <div className="">
        <SkillTicker />
      </div>
      <AboutMe />
      <Skillset title="things I know" />
      <Projects startingIndex={0} endingIndex={3} />
      <div className="mt-14 place-self-center">
        <TouchBtn
          children="See more"
          className="w-full px-20 md:px-12"
          href="/projects"
        />
      </div>
    </div>
  );
}
