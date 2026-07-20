import Link from "next/link";
import { projects } from "../data/portfolio";

export default function ProjectsPage() {
  return (
    <section className="py-28 px-6 max-w-[1200px] mx-auto min-h-[700px] flex flex-col items-center">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center text-dark relative after:content-[''] after:block after:w-8 after:h-px after:bg-dark after:opacity-25 after:mx-auto after:mt-2">
        Projects
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 content-center w-full mt-8">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className="project-group relative block aspect-4/3 shadow-custom overflow-hidden rounded bg-black cursor-pointer"
          >
            <img
              src={project.projectImg}
              alt={project.projectName}
              className="project-img w-full h-full object-cover transition-transform duration-750 ease-out group-hover:scale-105"
            />
            <div className="project-overlay absolute inset-0 bg-black/90 opacity-95 flex items-center justify-center text-light font-secondary text-2xl font-bold transition-all duration-300 pointer-events-none text-center px-4">
              {project.projectName}
            </div>
          </Link>
        ))}
      </div>
      
      <Link
        href="/certificates"
        className="block w-fit px-10 py-4 rounded-full bg-accent text-light font-secondary font-bold uppercase tracking-wider hover:bg-dark transition-colors mt-16 mx-auto no-underline text-center cursor-pointer text-sm sm:text-base"
      >
        View Certificates
      </Link>
    </section>
  );
}
