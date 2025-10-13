import { skillSets } from "../data";

const Skillset = () => {
  return (
    <section className=" mt-20 w-full">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-10 items-center justify-center">
        <h2 className="text-3xl md:text-[3.375rem] font-semibold mb-4 capitalize text-[#FEB273]">
          Things I know
        </h2>
        <ul className="flex w-full md:w-auto items-center justify-center flex-wrap gap-4">
           {skillSets.map((skill, index) => (
        <li
          key={index}
          className="flex items-center gap-2 px-3 py-1 border border-slate-400 rounded-full text-sm font-medium
                     transition-all duration-200 ease-out hover:shadow-md hover:-translate-y-1 hover:border-[#FEB273]"
        >
          <skill.icon color={skill.color} />
          <p>{skill.name}</p>
        </li>
      ))}
        </ul>
      </div>
    </section>
  );
};

export default Skillset;
