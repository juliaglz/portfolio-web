import Head from "next/head";
import Intro from "../components/Intro";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tu Nombre | Portfolio</title>
        <meta name="description" content="Julia Gonzalez Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="max-w-4xl mx-auto px-4">
        <Intro />

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Proyectos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
