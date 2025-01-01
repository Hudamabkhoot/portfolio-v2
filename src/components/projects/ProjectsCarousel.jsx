import { getProjects } from "../../../_actions/projectAction";
import Project from "./Project";

const projects = [
    {
      img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Personal Portfolio",
      tools: ["React", "Next.js", "Tailwind CSS", "Vercel"],
      desc: "A modern personal portfolio website to showcase skills, projects, and experience. Built with React and Next.js, styled with Tailwind CSS, and hosted on Vercel."
    },
    {
      img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "E-commerce Store",
      tools: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      desc: "A fully functional e-commerce store that allows users to browse products, add to cart, and checkout. Integrated with Stripe for secure payments and MongoDB for data storage."
    },
    {
        img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
        title: "Personal Portfolio",
        tools: ["React", "Next.js", "Tailwind CSS", "Vercel"],
        desc: "A modern personal portfolio website to showcase skills, projects, and experience. Built with React and Next.js, styled with Tailwind CSS, and hosted on Vercel."
      },
      {
        img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
        title: "Personal Portfolio",
        tools: ["React", "Next.js", "Tailwind CSS", "Vercel"],
        desc: "A modern personal portfolio website to showcase skills, projects, and experience. Built with React and Next.js, styled with Tailwind CSS, and hosted on Vercel."
      },
  ];

export default async function ProjectsCarousel() {
  const { data } = await getProjects()

  return (
   <div className="carousel carousel-center rounded-box max-w-full space-x-4 p-4 my-5">
    {data.map((project) => {
        return (
            <Project project={project} key={project._id}/>
        )
    })}
  </div>
  )
}
