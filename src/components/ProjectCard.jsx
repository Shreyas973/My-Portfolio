import Image from 'next/image';

export default function ProjectCard({ project }) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
      <div className="h-56 relative overflow-hidden rounded-t-xl">
        <Image
          src={project.image} // ✅ dynamically used
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-xl font-bold mt-4 text-pink-500">{project.title}</h3>
      <p className="text-gray-300 mt-2 mb-4">{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-400 hover:underline"
      >
        View Project →
      </a>
    </div>
  );
}
