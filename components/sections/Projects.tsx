import { projects } from "../data";

interface projectProps {
  startingIndex: number;
  endingIndex?: number;
}

function Projects({ startingIndex, endingIndex }: projectProps) {
  return (
    <section className="w-full mt-20 md:mt-30" id="projects">
      <div className="w-full max-w-[1440px] mx-auto">
        <h2 className="text-3xl md:text-[3.375rem] mb-10 font-semibold capitalize text-[#FEB273] text-center">
          Stuffs I have built
        </h2>
        <div className="w-full px-5 grid gap-5  sm:grid-cols-2 lg:grid-cols-3 justify-between ">
          {projects.slice(startingIndex, endingIndex).map(project => (
            <article
              key={project.name}
              className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 group hover:shadow-[0_12px_40px_rgba(254,178,115,0.4)] flex flex-col"
            >
              <a
                href={project.href}
                target="_blank"
                className="flex flex-col flex-1"
              >
                {/* Thumbnail */}
                <div className="overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.name}
                    className="w-full object-cover aspect-video transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col gap-y-5 flex-1 text-gray-500 transition-transform duration-300 group-hover:scale-105">
                  {/* Description and tech tags */}
                  <div>
                    <p className="text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex gap-2 flex-wrap text-sm mt-4">
                      {project.tech?.map(tech => (
                        <span
                          key={tech}
                          className="text-black bg-gray-200 py-1 px-2 rounded-2xl text-[13px] font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom row: name + live site */}
                  <div className="flex justify-between items-center mt-auto">
                    <h3 className="text-lg font-semibold capitalize text-black transition-colors duration-300">
                      {project.name}
                    </h3>
                    <span className="text-xs px-4 py-1 bg-black text-gray-100 rounded-full capitalize transition-all duration-300 group-hover:bg-[#FEB273] group-hover:text-white">
                      live site
                    </span>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
