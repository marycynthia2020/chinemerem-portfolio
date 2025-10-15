import { FaBehance } from "react-icons/fa";

const Designer = () => {
  return (
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
  );
};

export default Designer;
