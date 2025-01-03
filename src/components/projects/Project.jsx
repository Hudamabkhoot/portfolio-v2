import Image from "next/image"
import Link from "next/link"

export default function Project({ project, label, locale }) {


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
        <h2 className={`card-title text-dark-blue cursor-pointer ${locale === 'ar' ? 'flex-row-reverse space-x-reverse' : ''}`}>
        {project.title}
        <div className="badge bg-main-purple text-main-white font-bold text-xs border-none cursor-pointer hover:opacity-90">
          <Link href={project.liveLink} target="_blank">
            {label}
          </Link>
        </div>
        <div className="cursor-pointer">
          <Link href={project.githubLink} target="_blank">
            <Image
              src='/images/github.svg'
              alt="github icon"
              width={40}
              height={40}
              className="hover:opacity-60"
            />
          </Link>
        </div>
        </h2>
        <p className={`text-sm sm:mb-2 ${locale === 'ar' ? 'text-right' : ''}`}>{project.desc}</p>
        <div className={`card-actions ${locale === 'ar' ? 'flex-row-reverse space-x-reverse' : ''}`}>
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
