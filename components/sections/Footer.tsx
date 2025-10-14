import { FaBehance } from "react-icons/fa";
import TouchBtn from "../TouchBtn";

function Footer() {
  return (
    <footer className="max-w-[1440px] mx-auto mt-20 md:mt-30 pb-20 text-left px-5 text-[#AAB0B1]">
      <section className=" flex max-sm:gap-11 flex-col md:flex-row items-center justify-between pt-[58px] pb-[72px] px-5 md:px-[50px] border-[#566265] border">
        <h3 className="font-bold max-w-[fit-content] text-2xl md:text-[2.625rem] md:leading-[48px] flex flex-col">
          Got a project in mind? <span>Let's talk</span>
        </h3>
        <TouchBtn children="get in touch" className="px-16 md:px-10" href="/contact"/>
      </section>
      <section className="max-sm:px-5 mt-20 flex flex-col max-sm:gap-4 items-center md:gap-1">
        <p>
          Designed by{" "}
          <a
            href="https://www.behance.net/arif07"
            target="_blank"
            className="text-[#FEB273]"
          >
            Khandaker Ariful Haque
          </a>
        </p>
        <a
          href="https://www.behance.net/arif07"
          target="_blank"
          className="text-white text-xl"
        >
          <FaBehance />
        </a>
      </section>
    </footer>
  );
}

export default Footer;
