import Hero from "@/components/sections/Hero";
import Skillset from "@/components/sections/Skillset";

export default function About() {
  return (
    <div>
      <Hero
        headline="the person behind the"
        highlightedText="code"
        subText="I'm a Full Stack Developer and Project Manager who thrives on turning ideas into scalable digital experiences."
        showCTA={true}
      />
      <AboutSection />
    </div>
  );
}

function AboutSection() {
  return (
    <section className="max-w-[1440px] mt-20 md:mt-30 mx-auto px-5 text-[#BDD9D8] flex flex-col gap-6 md:gap-10 items-center justify-center">
      <div className="w-full grid gap-y-10">
        <div className="">
          <p className="text-2xl md:text-3xl font-bold leading-tight md:leading-snug text-center">
            <span>Hi,</span> my name is
            <span className="block text-[#FEB273] capitalize">
              Chinemerem Ugbaja.
            </span>
          </p>
          <p className="text-lg text-left md:text-xl  mt-4 mx-auto max-w-2xl">
            I am full Stack Developer and Project Manager who believes great products are built where structure meets creativity. I'm passionate about turning ideas into functional, meaningful digital experiences that actually solve problems.
          </p>
        </div>
        <div className="grid place-content-center">
          <img
            src="https://res.cloudinary.com/djnwsinit/image/upload/v1760962177/chinemerem_djvrip.jpg"
            alt="Portrait of Chinemerem Ugbaja"
            className="max-w-[280px] md:max-w-[360px] rounded-xl shadow-lg transition-transform duration-500 ease-out hover:scale-105 hover:rotate-1 hover:shadow-[0_12px_40px_rgba(254,178,115,0.4)]"
            loading="eager"
          />
        </div>
        <div className="text-left">
          <p className="text-lg md:text-xl  mt-4 mx-auto max-w-2xl">
            Over time, I've learned that no matter how good the idea, execution is everything. My background in project management has shaped how I think and work, from breaking down complex goals into clear, achievable tasks to managing timelines and keeping projects on track without losing the spark that started them. I enjoy bringing order to the process, coordinating, keeping communication open, and ensuring every milestone is met with purpose.
          </p>
          <p className="text-lg md:text-xl  mt-4 mx-auto max-w-2xl">
          Outside the code and task boards, I'm someone who values clarity, efficiency, and progress. I love the feeling that comes with seeing a project move from concept to completion, knowing that every small decision, every late-night fix, and every well-timed collaboration adds up to something greater. Building is what I do; delivering value through it is what drives me.
          </p>
        </div>
      </div>
      <div className="w-full text-left mt-24">
          <h3 className="uppercase border-l-8 border-l-[#FEB273] pl-3 font-semibold text-4xl">
            Skills
          </h3>
          <div className="-mt-20 md:-mt-30"><Skillset title=""/></div>
        </div>
    </section>
  );
}
