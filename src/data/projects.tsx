export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

export const projects: Project[]= [
  {
    title: "My Cool Project",
    description: "A short description about it.",
    link: "https://github.com/myrepo",
    image: "/file.svg"
  },
  {
    title: "Another Project",
    description: "Something even cooler.",
    link: "https://myportfolio.com/project2",
    image: "/globe.svg"
  }
];