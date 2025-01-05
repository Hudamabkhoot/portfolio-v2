import { useTranslations } from "next-intl";


export default function SkillCard({data, title}) {

  return (
    <div className="card border-2 border-gray-100 w-80 md:w-96 shadow-sm">
      <div className="card-body p-0">
      <div className="bg-main-purple flex items-center justify-center rounded-tl-xl rounded-tr-xl">
        <h2 className="card-title font-bold text-xl text-main-white p-2">{title}</h2>
      </div>
      {data.map((tool, index) => (
        <li key={index} className={`text-center list-none py-2 ${index !== data.length - 1 ? 'border-b-2 border-b-gray-100' : ''}`}>
          <p className="px-2 text-main-gray">
            {tool.text}
          </p>
        </li>
      ))}
    </div>
  </div>
  )
}
