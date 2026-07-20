import { notFound } from "next/navigation";
import { GitBranch, EyeIcon } from "lucide-react";
import { projects } from "@/data/portfolio";

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

interface ProjectViewProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectView({ params }: ProjectViewProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="py-28 px-6 max-w-300 mx-auto min-h-[80vh]">
      <section className="flex flex-col lg:grid lg:grid-cols-[auto_1fr] gap-8 items-center bg-transparent mb-12 p-0">
        <img
          src={project.projectImg}
          alt={project.projectName}
          className="w-full max-w-[320px] shadow-custom object-contain rounded"
        />
        <div className="flex flex-col gap-4 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-dark">
            {project.projectName}{" "}
            <strong className="block font-bold text-accent">
              {project.projectType}
            </strong>
          </h1>
          <div>
            <p className="inline-block w-3/4 text-lg lg:text-xl py-1.5 px-6 text-light drop-shadow-[2px_2px_2px_rgba(0,0,0,0.3)] bg-[url(/assets/bg-tag.svg)] bg-no-repeat bg-size-[100%_100%]">
              {project.technology}
            </p>
          </div>
        </div>
      </section>

      <section className="mt-8 flex flex-col gap-6 p-0">
        <div className="flex flex-wrap gap-4">
          {project.githubLink && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={project.githubLink}
              className="flex items-center gap-2 border border-dark text-dark py-2 px-6 no-underline hover:scale-105 transition-transform shadow-custom text-sm font-semibold rounded"
            >
              <GitBranch className="w-5 h-5" /> GitHub Repo
            </a>
          )}
          {project.liveLink && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={project.liveLink}
              className="flex items-center gap-2 border border-dark text-dark py-2 px-6 no-underline hover:scale-105 transition-transform shadow-custom text-sm font-semibold rounded"
            >
              <EyeIcon className="w-5 h-5" /> Live version
            </a>
          )}
        </div>

        {/* Render description as HTML */}
        <div
          className="text-base lg:text-lg text-dark leading-relaxed flex flex-col gap-4 mt-4 font-sans text-justify"
          dangerouslySetInnerHTML={{ __html: project.description }}
        />
      </section>
    </div>
  );
}
