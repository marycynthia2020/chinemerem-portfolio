import { projects } from "../data";

interface projectProps{
  startingIndex: number,
  endingIndex?: number
} 

function Projects({startingIndex, endingIndex}: projectProps) {
  return (
    <section className="w-full mt-20 md:mt-30" id="projects">
      <div className="w-full max-w-[1440px] mx-auto">
        <h2 className="text-3xl md:text-[3.375rem] mb-10 font-semibold capitalize text-[#FEB273] text-center">
          Stuffs I have built
        </h2>
        <div className="w-full grid-cols-[repeat(auto-fit,_minmax(min(300px,_100%),_1fr))] grid gap-8 px-5">
          {projects.slice(startingIndex, endingIndex).map(project => (
            <article
              key={project.name}
              className="bg-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(254,178,115,0.4)]"
            >
              <a
                href={project.href}
                target="_blank"
                className=""
              >
                <div
                  className="overflow-hidden"
                >
                  <img
                    src={project.thumbnail}
                    alt={project.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-4 flex justify-between items-center border-b border-[#566265]">
                  <h3
                    className="text-lg font-semibold capitalize text-black transition-colors duration-300"
                  >
                    {project.name}
                  </h3>
                  <span className="text-xs px-4 py-1 border bg-black border-[#FEB273] rounded-full capitalize transition-all duration-300 hover:bg-[#FEB273] hover:text-white">
                    live site
                  </span>
                </div>
                {/* <div className="p-4 text-[#191919]">
                  {project.desc}
                </div> */}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
