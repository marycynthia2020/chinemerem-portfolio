import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
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
      <div className="w-full mt-7 bg-[#FEB273] py-5 overflow-hidden rotate-1">
        <div className="animate-scroll whitespace-nowrap text-7xl  text-[#03141A] uppercase">
          <span className="mx-10">
            Frontend . Backend . FullStack . Project Manager
          </span>
          <span className="mx-10">
            Frontend . Backend . FullStack . Project Manager
          </span>
        </div>
      </div>
      <div className=" mx-auto">
        <Projects startingIndex={0} />
      </div>
    </div>
  );
}
