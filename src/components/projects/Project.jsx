import Image from "next/image"
import Link from "next/link"

export default function Project({ project }) {
  return (
    <div className="carousel-item">
    <div className="card w-80 card-lg shadow-xl hover:shadow-main-purple hover:shadow-lg ease-in transition-all duration-300">
    <figure>
        <img
        src={project.image}
        alt={`${project.title} image`}
        className="object-cover"
        />
    </figure>
    <div className="card-body">
        <h2 className="card-title text-dark-blue cursor-pointer">
        {project.title}
        <div className="badge bg-main-purple text-dark-blue border-none cursor-pointer">
          <Link href={project.liveLink}>
            Live
          </Link>
        </div>
        <div className="cursor-pointer">
          <Link href={project.githubLink}>
            <Image
              src='/images/github.svg'
              alt="github icon"
              width={40}
              height={40}
            />
          </Link>
        </div>
        </h2>
        <p className="text-sm sm:mb-2">{project.description}</p>
        <div className="card-actions">
        {project.tools.map((tool) => {
            return (
            <div className="badge badge-outline text-xs xl:text-sm" key={tool}>{tool}</div>
            )
        })}
    </div>
    </div>
</div>
</div>
  )
}
