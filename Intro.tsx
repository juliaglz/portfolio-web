// components/Intro.tsx
import Link from "next/link";

export default function Intro() {
  return (
    <section className="text-center py-20">
      <h1 className="text-5xl font-bold">Julia Gonzalez Ramos</h1>
      <p className="text-xl text-gray-600 mt-4">Mathematician and programmer</p>
      <div className="mt-6 flex justify-center gap-6 text-blue-600">
        <Link href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">
          GitHub
        </Link>
        <Link href="https://linkedin.com/in/juliaglz" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </Link>
        <Link href="mailto:juliaglzramos@gmial.com">
          Email
        </Link>
        <Link href="/cv.pdf" target="_blank" rel="noopener noreferrer">
          CV
        </Link>
      </div>
    </section>
  );
}
