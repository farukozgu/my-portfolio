
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiFirebase,
  SiMongodb,
  SiPrisma,
  SiAxios,
} from "react-icons/si";

type TechIconProps = {
  tag: string; 
  className?: string;
};


const iconMap: { [key: string]: React.ElementType } = {
  react: FaReact,
  nextjs: SiNextdotjs,
  tailwindcss: SiTailwindcss,
  javascript: SiJavascript,
  typescript: SiTypescript,
  nodejs: FaNodeJs,
  firebase: SiFirebase,
  mongodb: SiMongodb,
  prisma: SiPrisma,
  axios: SiAxios,
  html5: FaHtml5,
  css3: FaCss3Alt,
  github: FaGithub,
  git: FaGitAlt,
};


export const TechIcon = ({ tag, className = "" }: TechIconProps) => {
  const normalizedTag = tag.toLowerCase().replace(/[\. ]/g, "");


  const IconComponent = iconMap[normalizedTag];

  if (IconComponent) {

    return (
      <span
        title={tag}
        className={`flex items-center gap-1.5 bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm ${className}`}
      >
        <IconComponent /> 
        {tag} 
      </span>
    );
  }

  return (
    <span
      className={`bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm ${className}`}
    >
      {tag}
    </span>
  );
};