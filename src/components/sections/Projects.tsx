import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <div key={project.title} className="rounded-xl border p-4 shadow">
            <img src={project.image} alt={project.title} className="h-32 w-full object-contain" />
            <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}