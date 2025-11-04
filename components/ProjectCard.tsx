
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/data";
import { TechIcon } from "./TechIcon";
import { FiExternalLink } from "react-icons/fi";
type ProjectCardProps = {
  project: Project; 
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="bg-white shadow-lg rounded-lg overflow-hidden group transition-all duration-300 hover:scale-103">
      <div className="relative h-52 w-full">
        <Image
          src={project.imageUrl}
          alt={project.title}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-700 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <TechIcon key={tag} tag={tag} />
          ))}
        </div>

        <div className="flex space-x-4 pt-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black font-semibold hover:underline flex items-center gap-1" // Stil eklendi
          >
            Github
            <FiExternalLink /> 
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black font-semibold hover:underline flex items-center gap-1" // Stil eklendi
          >
            Live Demo 
            <FiExternalLink /> 
          </a>
        </div>
      </div>
    </article>
  );
};