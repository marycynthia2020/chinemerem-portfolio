import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import SkillTicker from "@/components/sections/SkillTicker";
import TouchBtn from "@/components/TouchBtn";

export default function ProjectPage() {
  return (
    <div>
      <Hero
        headline="Bringing ideas to life with code"
        highlightedText=" and purpose"
        subText="Behind every build is a challenge and a thought. These are not just projects, they're moments of learning, growth, and creativity in motion"
        showCTA={false}
      />
    <SkillTicker />
      <div className=" mx-auto">
        <Projects startingIndex={0} />
      </div>
    </div>
  );
}
