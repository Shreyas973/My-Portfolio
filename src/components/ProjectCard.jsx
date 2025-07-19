// ProjectCard.jsx
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4 }}
      className="bg-gray-800 p-6 rounded-xl shadow-lg"
    >
      <div className="h-56 relative overflow-hidden rounded-t-xl">
        <Image src={project.image} alt={project.title} fill className="object-cover" />
      </div>
      <h3 className="text-xl font-bold mt-4 text-pink-500">{project.title}</h3>
      <p className="text-gray-300 mt-2 mb-4">{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline">
        View Project →
      </a>
    </motion.div>
  );
}