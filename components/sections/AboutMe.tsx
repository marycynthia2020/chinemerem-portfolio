import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import TouchBtn from "../TouchBtn";

function AboutMe() {
  return (
    <section id="about-me" className="w-full mt-20 md:mt-30 ">
      <div className="w-full max-w-[1440px] mx-auto col-span-12 grid grid-cols-2 gap-y-12 px-5">
        <div className="col-span-2 md:col-start-1 md:col-end-2 grid place-content-center">
          <img src="star.svg" alt="" />
          <div className="-mt-20">
            <img
              // src="/my-pix.jpeg"
              alt="Portrait of Chinemerem Ugbaja"
              className="max-w-[280px] md:max-w-[400px] rounded-xl shadow-lg transition-transform duration-500 ease-out hover:scale-105 hover:rotate-1 hover:shadow-[0_12px_40px_rgba(254,178,115,0.4)]"
              loading="eager"
            />n
          </div>
        </div>
        <div className="col-span-2 md:col-start-2 md:-col-end-1 text-left flex flex-col gap-5 justify-between">
          <h2 className="uppercase text-3xl font-semibold">about me</h2>
          <RiCheckboxBlankCircleFill width={8} height={8} color="#707070" />
          <p>Hi, I am Chinemerem Ugbaja.</p>
          <RiCheckboxBlankCircleFill width={8} height={8} color="#707070" />
          <p>
            I'm a full-stack developer who believes technology should simplify
            life, not complicate it. I find meaning in creating solutions that
            bridge gaps, helping people connect, learn, and grow through
            intuitive digital experiences.
          </p>
          <RiCheckboxBlankCircleFill width={8} height={8} color="#707070" />
          <p>
            What drives me most is the process, understanding problems deeply,
            designing thoughtfully, and building with care. I'm constantly
            evolving, learning from every challenge, and paying attention to the
            little details that make a big difference in how people experience a
            product.
          </p>
          <RiCheckboxBlankCircleFill width={8} height={8} color="#707070" />
          <p>
            Beyond the code, I value clarity, collaboration, and purpose.
            Whether it's a personal project, a startup idea, or a team effort, I
            approach every work with curiosity, empathy, and the mindset that
            great things are built one intentional step at a time.
          </p>
        </div>
      </div>
      <div className="mt-14 place-self-center">
        <TouchBtn children="get in touch<" className="w-full px-20"  href="/contact"/>
      </div>
    </section>
  );
}

export default AboutMe;
