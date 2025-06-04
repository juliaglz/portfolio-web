// components/ProjectCard.tsx

interface Project {
  name: string;
  description: string;
  stack: string[];
  github: string;
  demo: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-2xl font-semibold">{project.name}</h3>
      <p className="text-gray-700 mt-2">{project.description}</p>
      <p className="text-sm text-gray-500 mt-2">Tech: {project.stack.join(", ")}</p>
      <div className="mt-4 flex gap-6">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          GitHub
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Demo
        </a>
      </div>
    </div>
  );
}
