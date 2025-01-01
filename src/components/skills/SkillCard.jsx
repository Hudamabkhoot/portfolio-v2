
const frontend = [
   { title: "React.js"},
   { title: "Next.js"},
   { title: "Javascript"},
   { title: "Typescript"},
   { title: "HTML & CSS"},
  ];


  const tools = [
    { title: "Redux"},
    { title: "Firebase"},
    { title: "MongoDB"},
    { title: "Git"},
    { title: "Tailwind CSS"},
    { title: "Framer Motion"},
    { title: "Charts.js"},
   ];


export default function SkillCard() {
  return (
    <div className="card text-primary-content w-68">
        <div className="py-2 px-4 flex items-center bg-main-white border border-main-gray hover:border-main-black hover:text-main-black rounded-lg">
            <h2 className="card-title font-normal text-md text-lg">Card title!</h2>
        </div>
    </div>
  )
}
