export type Project = {
  title: string;
  description: string;
  imageUrl: string; 
  tags: string[]; 
  liveUrl: string; 
  githubUrl: string; 
};

export const projectsData: Project[] = [
  {
    title: "TMDB Movie Project",
    description:
      "A movie database project that lists popular movies and offers search and filter features using React and TMDB API.",
    imageUrl: "/images/tmdb-project.png", 
    tags: ["React", "API", "CSS Modules", "Axios"],
    liveUrl: "https://tmdb-react-project.netlify.app/", 
    githubUrl: "https://github.com/farukozgu/tmdb-react-project",
  },
  {
    title: "To-Do List Project",
    description:
      "A classic to-do list app I made with React, with features for adding, deleting, and completing tasks.",
    imageUrl: "/images/todo-project.png", 
    tags: ["React", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://react-todo-app-final.vercel.app/",
    githubUrl: "https://github.com/farukozgu/react-todo-app-final", 
  },
];


export type Experience = {
  title: string;
  company: string;
  description: string;
  date: string;
};


export const experiencesData: Experience[] = [
  {
    title: "Frontend Developer",
    company: "Pfizer, Istanbul (affiliate with Niceye)",
    description:
      "Actively developed and maintained Pfizer's internal 'Canvas' and 'Franklin' CMS platforms, enabling marketing teams to build digital content without code. My responsibilities focused on debugging existing code, refactoring for higher quality and performance, and modernizing legacy UIs to improve the overall user experience.",
    date: "September 2022 - July 2025",
  },
  {
    title: "Frontend Developer",
    company: "Niceye Group, Istanbul",
    description:
      "Developed HTML, CSS, Javascript & React.js-based interactive streaming platforms and corporate sites for global health firms like GSK and AstraZeneca. I translated designs into pixel-perfect, responsive, and cross-browser compatible UIs, and improved existing codebases by refactoring, debugging, and modernizing legacy interfaces to enhance user experience.",
    date: "September 2022 - July 2025",
  },
];